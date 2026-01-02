import * as shaders from './shaders'

interface FBO {
  texture: WebGLTexture
  fbo: WebGLFramebuffer
  width: number
  height: number
  attach: (id: number) => number
}

interface DoubleFBO {
  width: number
  height: number
  texelSizeX: number
  texelSizeY: number
  read: FBO
  write: FBO
  swap: () => void
}

interface Program {
  program: WebGLProgram
  uniforms: Record<string, WebGLUniformLocation>
  bind: () => void
}

export class FluidSimulation {
  private canvas: HTMLCanvasElement
  private gl: WebGLRenderingContext
  private ext: {
    formatRGBA: { internalFormat: number; format: number }
    formatRG: { internalFormat: number; format: number }
    formatR: { internalFormat: number; format: number }
    halfFloatTexType: number
    supportLinearFiltering: boolean
  }

  private programs: {
    copy: Program
    clear: Program
    display: Program
    splat: Program
    advection: Program
    divergence: Program
    curl: Program
    vorticity: Program
    pressure: Program
    gradientSubtract: Program
    externalForce: Program
  }

  private dye!: DoubleFBO
  private velocity!: DoubleFBO
  private divergence!: FBO
  private curl!: FBO
  private pressure!: DoubleFBO

  private blit: (target: FBO | null) => void

  // Simulation params
  private simWidth = 128
  private simHeight = 128
  private dyeWidth = 1024
  private dyeHeight = 1024
  private density = 0.98
  private velocityDissipation = 0.99
  private pressureIterations = 20
  private curlStrength = 30
  private splatRadius = 0.25

  // Gravity from device orientation
  private gravityX = 0
  private gravityY = 0

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas

    const params = {
      alpha: true,
      depth: false,
      stencil: false,
      antialias: false,
      preserveDrawingBuffer: false,
    }

    let gl = canvas.getContext('webgl2', params) as WebGLRenderingContext
    const isWebGL2 = !!gl
    if (!gl) {
      gl = (canvas.getContext('webgl', params) || canvas.getContext('experimental-webgl', params)) as WebGLRenderingContext
    }
    if (!gl) throw new Error('WebGL not supported')
    this.gl = gl

    // Setup extensions
    if (isWebGL2) {
      (gl as WebGL2RenderingContext).getExtension('EXT_color_buffer_float')
    } else {
      gl.getExtension('OES_texture_half_float')
      gl.getExtension('OES_texture_half_float_linear')
    }

    const halfFloat = isWebGL2 ? (gl as WebGL2RenderingContext).HALF_FLOAT : gl.getExtension('OES_texture_half_float')?.HALF_FLOAT_OES || gl.UNSIGNED_BYTE
    const formatRGBA = this.getSupportedFormat(gl, isWebGL2 ? (gl as WebGL2RenderingContext).RGBA16F : gl.RGBA, gl.RGBA, halfFloat)
    const formatRG = this.getSupportedFormat(gl, isWebGL2 ? (gl as WebGL2RenderingContext).RG16F : gl.RGBA, isWebGL2 ? (gl as WebGL2RenderingContext).RG : gl.RGBA, halfFloat)
    const formatR = this.getSupportedFormat(gl, isWebGL2 ? (gl as WebGL2RenderingContext).R16F : gl.RGBA, isWebGL2 ? (gl as WebGL2RenderingContext).RED : gl.RGBA, halfFloat)

    this.ext = {
      formatRGBA,
      formatRG,
      formatR,
      halfFloatTexType: halfFloat,
      supportLinearFiltering: !!gl.getExtension('OES_texture_half_float_linear') || isWebGL2,
    }

    // Create blit function
    const vertexBuffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, -1, 1, 1, 1, 1, -1]), gl.STATIC_DRAW)

    const indexBuffer = gl.createBuffer()
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer)
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array([0, 1, 2, 0, 2, 3]), gl.STATIC_DRAW)

    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0)
    gl.enableVertexAttribArray(0)

    this.blit = (target: FBO | null) => {
      if (target) {
        gl.viewport(0, 0, target.width, target.height)
        gl.bindFramebuffer(gl.FRAMEBUFFER, target.fbo)
      } else {
        gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight)
        gl.bindFramebuffer(gl.FRAMEBUFFER, null)
      }
      gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0)
    }

    // Compile programs
    this.programs = {
      copy: this.createProgram(shaders.baseVertexShader, shaders.copyShader),
      clear: this.createProgram(shaders.baseVertexShader, shaders.clearShader),
      display: this.createProgram(shaders.baseVertexShader, shaders.displayShader),
      splat: this.createProgram(shaders.baseVertexShader, shaders.splatShader),
      advection: this.createProgram(shaders.baseVertexShader, shaders.advectionShader),
      divergence: this.createProgram(shaders.baseVertexShader, shaders.divergenceShader),
      curl: this.createProgram(shaders.baseVertexShader, shaders.curlShader),
      vorticity: this.createProgram(shaders.baseVertexShader, shaders.vorticityShader),
      pressure: this.createProgram(shaders.baseVertexShader, shaders.pressureShader),
      gradientSubtract: this.createProgram(shaders.baseVertexShader, shaders.gradientSubtractShader),
      externalForce: this.createProgram(shaders.baseVertexShader, shaders.externalForceShader),
    }

    this.initFramebuffers()
  }

  private getSupportedFormat(gl: WebGLRenderingContext, internalFormat: number, format: number, type: number) {
    if (!this.supportRenderTextureFormat(gl, internalFormat, format, type)) {
      return { internalFormat: gl.RGBA, format: gl.RGBA }
    }
    return { internalFormat, format }
  }

  private supportRenderTextureFormat(gl: WebGLRenderingContext, internalFormat: number, format: number, type: number): boolean {
    const texture = gl.createTexture()
    gl.bindTexture(gl.TEXTURE_2D, texture)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
    gl.texImage2D(gl.TEXTURE_2D, 0, internalFormat, 4, 4, 0, format, type, null)

    const fbo = gl.createFramebuffer()
    gl.bindFramebuffer(gl.FRAMEBUFFER, fbo)
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0)

    const status = gl.checkFramebufferStatus(gl.FRAMEBUFFER)
    gl.deleteTexture(texture)
    gl.deleteFramebuffer(fbo)
    gl.bindFramebuffer(gl.FRAMEBUFFER, null)
    return status === gl.FRAMEBUFFER_COMPLETE
  }

  private createProgram(vertexShader: string, fragmentShader: string): Program {
    const gl = this.gl

    const vs = gl.createShader(gl.VERTEX_SHADER)!
    gl.shaderSource(vs, vertexShader)
    gl.compileShader(vs)

    const fs = gl.createShader(gl.FRAGMENT_SHADER)!
    gl.shaderSource(fs, fragmentShader)
    gl.compileShader(fs)

    const program = gl.createProgram()!
    gl.attachShader(program, vs)
    gl.attachShader(program, fs)
    gl.linkProgram(program)

    const uniforms: Record<string, WebGLUniformLocation> = {}
    const uniformCount = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS)
    for (let i = 0; i < uniformCount; i++) {
      const info = gl.getActiveUniform(program, i)
      if (info) {
        const loc = gl.getUniformLocation(program, info.name)
        if (loc) uniforms[info.name] = loc
      }
    }

    return {
      program,
      uniforms,
      bind: () => gl.useProgram(program),
    }
  }

  private createFBO(w: number, h: number, internalFormat: number, format: number, type: number, filter: number): FBO {
    const gl = this.gl
    gl.activeTexture(gl.TEXTURE0)

    const texture = gl.createTexture()!
    gl.bindTexture(gl.TEXTURE_2D, texture)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, filter)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, filter)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
    gl.texImage2D(gl.TEXTURE_2D, 0, internalFormat, w, h, 0, format, type, null)

    const fbo = gl.createFramebuffer()!
    gl.bindFramebuffer(gl.FRAMEBUFFER, fbo)
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0)
    gl.viewport(0, 0, w, h)
    gl.clear(gl.COLOR_BUFFER_BIT)

    const texId = 0
    return {
      texture,
      fbo,
      width: w,
      height: h,
      attach: (id: number) => {
        gl.activeTexture(gl.TEXTURE0 + id)
        gl.bindTexture(gl.TEXTURE_2D, texture)
        return id
      },
    }
  }

  private createDoubleFBO(w: number, h: number, internalFormat: number, format: number, type: number, filter: number): DoubleFBO {
    let fbo1 = this.createFBO(w, h, internalFormat, format, type, filter)
    let fbo2 = this.createFBO(w, h, internalFormat, format, type, filter)

    return {
      width: w,
      height: h,
      texelSizeX: 1.0 / w,
      texelSizeY: 1.0 / h,
      get read() { return fbo1 },
      set read(value) { fbo1 = value },
      get write() { return fbo2 },
      set write(value) { fbo2 = value },
      swap() {
        const temp = fbo1
        fbo1 = fbo2
        fbo2 = temp
      },
    }
  }

  private initFramebuffers() {
    const gl = this.gl
    const simRes = this.getResolution(this.simWidth)
    const dyeRes = this.getResolution(this.dyeWidth)

    this.simWidth = simRes.width
    this.simHeight = simRes.height
    this.dyeWidth = dyeRes.width
    this.dyeHeight = dyeRes.height

    const texType = this.ext.halfFloatTexType
    const rgba = this.ext.formatRGBA
    const rg = this.ext.formatRG
    const r = this.ext.formatR
    const filtering = this.ext.supportLinearFiltering ? gl.LINEAR : gl.NEAREST

    this.dye = this.createDoubleFBO(this.dyeWidth, this.dyeHeight, rgba.internalFormat, rgba.format, texType, filtering)
    this.velocity = this.createDoubleFBO(this.simWidth, this.simHeight, rg.internalFormat, rg.format, texType, filtering)
    this.divergence = this.createFBO(this.simWidth, this.simHeight, r.internalFormat, r.format, texType, gl.NEAREST)
    this.curl = this.createFBO(this.simWidth, this.simHeight, r.internalFormat, r.format, texType, gl.NEAREST)
    this.pressure = this.createDoubleFBO(this.simWidth, this.simHeight, r.internalFormat, r.format, texType, gl.NEAREST)
  }

  private getResolution(resolution: number) {
    const gl = this.gl
    let aspectRatio = gl.drawingBufferWidth / gl.drawingBufferHeight
    if (aspectRatio < 1) aspectRatio = 1.0 / aspectRatio

    const min = Math.round(resolution)
    const max = Math.round(resolution * aspectRatio)

    if (gl.drawingBufferWidth > gl.drawingBufferHeight) {
      return { width: max, height: min }
    }
    return { width: min, height: max }
  }

  resize() {
    const width = this.canvas.clientWidth
    const height = this.canvas.clientHeight
    if (this.canvas.width !== width || this.canvas.height !== height) {
      this.canvas.width = width
      this.canvas.height = height
      this.initFramebuffers()
    }
  }

  setGravity(x: number, y: number) {
    this.gravityX = x
    this.gravityY = y
  }

  splat(x: number, y: number, dx: number, dy: number, color: [number, number, number]) {
    const gl = this.gl

    this.programs.splat.bind()
    gl.uniform1i(this.programs.splat.uniforms.uTarget, this.velocity.read.attach(0))
    gl.uniform1f(this.programs.splat.uniforms.aspectRatio, this.canvas.width / this.canvas.height)
    gl.uniform2f(this.programs.splat.uniforms.point, x, y)
    gl.uniform3f(this.programs.splat.uniforms.color, dx, dy, 0)
    gl.uniform1f(this.programs.splat.uniforms.radius, this.correctRadius(this.splatRadius / 100.0))
    this.blit(this.velocity.write)
    this.velocity.swap()

    gl.uniform1i(this.programs.splat.uniforms.uTarget, this.dye.read.attach(0))
    gl.uniform3f(this.programs.splat.uniforms.color, color[0], color[1], color[2])
    this.blit(this.dye.write)
    this.dye.swap()
  }

  private correctRadius(radius: number): number {
    const aspectRatio = this.canvas.width / this.canvas.height
    if (aspectRatio > 1) {
      return radius * aspectRatio
    }
    return radius
  }

  step(dt: number) {
    const gl = this.gl
    gl.disable(gl.BLEND)

    // Apply gravity/external forces
    if (Math.abs(this.gravityX) > 0.01 || Math.abs(this.gravityY) > 0.01) {
      this.programs.externalForce.bind()
      gl.uniform2f(this.programs.externalForce.uniforms.texelSize, this.velocity.texelSizeX, this.velocity.texelSizeY)
      gl.uniform1i(this.programs.externalForce.uniforms.uVelocity, this.velocity.read.attach(0))
      gl.uniform2f(this.programs.externalForce.uniforms.gravity, this.gravityX * 50, this.gravityY * 50)
      gl.uniform1f(this.programs.externalForce.uniforms.dt, dt)
      this.blit(this.velocity.write)
      this.velocity.swap()
    }

    // Curl
    this.programs.curl.bind()
    gl.uniform2f(this.programs.curl.uniforms.texelSize, this.velocity.texelSizeX, this.velocity.texelSizeY)
    gl.uniform1i(this.programs.curl.uniforms.uVelocity, this.velocity.read.attach(0))
    this.blit(this.curl)

    // Vorticity
    this.programs.vorticity.bind()
    gl.uniform2f(this.programs.vorticity.uniforms.texelSize, this.velocity.texelSizeX, this.velocity.texelSizeY)
    gl.uniform1i(this.programs.vorticity.uniforms.uVelocity, this.velocity.read.attach(0))
    gl.uniform1i(this.programs.vorticity.uniforms.uCurl, this.curl.attach(1))
    gl.uniform1f(this.programs.vorticity.uniforms.curl, this.curlStrength)
    gl.uniform1f(this.programs.vorticity.uniforms.dt, dt)
    this.blit(this.velocity.write)
    this.velocity.swap()

    // Divergence
    this.programs.divergence.bind()
    gl.uniform2f(this.programs.divergence.uniforms.texelSize, this.velocity.texelSizeX, this.velocity.texelSizeY)
    gl.uniform1i(this.programs.divergence.uniforms.uVelocity, this.velocity.read.attach(0))
    this.blit(this.divergence)

    // Clear pressure
    this.programs.clear.bind()
    gl.uniform1i(this.programs.clear.uniforms.uTexture, this.pressure.read.attach(0))
    gl.uniform1f(this.programs.clear.uniforms.value, 0.8)
    this.blit(this.pressure.write)
    this.pressure.swap()

    // Pressure solve
    this.programs.pressure.bind()
    gl.uniform2f(this.programs.pressure.uniforms.texelSize, this.velocity.texelSizeX, this.velocity.texelSizeY)
    gl.uniform1i(this.programs.pressure.uniforms.uDivergence, this.divergence.attach(0))
    for (let i = 0; i < this.pressureIterations; i++) {
      gl.uniform1i(this.programs.pressure.uniforms.uPressure, this.pressure.read.attach(1))
      this.blit(this.pressure.write)
      this.pressure.swap()
    }

    // Gradient subtract
    this.programs.gradientSubtract.bind()
    gl.uniform2f(this.programs.gradientSubtract.uniforms.texelSize, this.velocity.texelSizeX, this.velocity.texelSizeY)
    gl.uniform1i(this.programs.gradientSubtract.uniforms.uPressure, this.pressure.read.attach(0))
    gl.uniform1i(this.programs.gradientSubtract.uniforms.uVelocity, this.velocity.read.attach(1))
    this.blit(this.velocity.write)
    this.velocity.swap()

    // Advect velocity
    this.programs.advection.bind()
    gl.uniform2f(this.programs.advection.uniforms.texelSize, this.velocity.texelSizeX, this.velocity.texelSizeY)
    const velocityId = this.velocity.read.attach(0)
    gl.uniform1i(this.programs.advection.uniforms.uVelocity, velocityId)
    gl.uniform1i(this.programs.advection.uniforms.uSource, velocityId)
    gl.uniform1f(this.programs.advection.uniforms.dt, dt)
    gl.uniform1f(this.programs.advection.uniforms.dissipation, this.velocityDissipation)
    this.blit(this.velocity.write)
    this.velocity.swap()

    // Advect dye
    gl.uniform2f(this.programs.advection.uniforms.texelSize, this.dye.texelSizeX, this.dye.texelSizeY)
    gl.uniform1i(this.programs.advection.uniforms.uVelocity, this.velocity.read.attach(0))
    gl.uniform1i(this.programs.advection.uniforms.uSource, this.dye.read.attach(1))
    gl.uniform1f(this.programs.advection.uniforms.dissipation, this.density)
    this.blit(this.dye.write)
    this.dye.swap()
  }

  render() {
    const gl = this.gl
    gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA)
    gl.enable(gl.BLEND)

    this.programs.display.bind()
    gl.uniform1i(this.programs.display.uniforms.uTexture, this.dye.read.attach(0))
    this.blit(null)
  }

  clear() {
    const gl = this.gl

    this.programs.clear.bind()
    gl.uniform1f(this.programs.clear.uniforms.value, 0)

    gl.uniform1i(this.programs.clear.uniforms.uTexture, this.dye.read.attach(0))
    this.blit(this.dye.write)
    this.dye.swap()

    gl.uniform1i(this.programs.clear.uniforms.uTexture, this.velocity.read.attach(0))
    this.blit(this.velocity.write)
    this.velocity.swap()
  }
}
