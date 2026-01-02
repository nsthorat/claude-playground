import{c as U,r as g,j as u,a as X}from"./createLucideIcon-DmGqDKOX.js";import{c as D}from"./utils-fNskMoFt.js";import{A as O}from"./arrow-left-CoEqBaNr.js";import{S as A}from"./smartphone-DSkm_UCC.js";import{R as V}from"./rotate-ccw-BZGsAx_e.js";const G=[["path",{d:"M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2",key:"1fvzgz"}],["path",{d:"M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2",key:"1kc0my"}],["path",{d:"M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8",key:"10h0bg"}],["path",{d:"M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",key:"1s1gnw"}]],I=U("hand",G);const H=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],W=U("trash-2",H),x=`
  precision highp float;
  attribute vec2 aPosition;
  varying vec2 vUv;
  varying vec2 vL;
  varying vec2 vR;
  varying vec2 vT;
  varying vec2 vB;
  uniform vec2 texelSize;

  void main () {
    vUv = aPosition * 0.5 + 0.5;
    vL = vUv - vec2(texelSize.x, 0.0);
    vR = vUv + vec2(texelSize.x, 0.0);
    vT = vUv + vec2(0.0, texelSize.y);
    vB = vUv - vec2(0.0, texelSize.y);
    gl_Position = vec4(aPosition, 0.0, 1.0);
  }
`,k=`
  precision mediump float;
  precision mediump sampler2D;
  varying highp vec2 vUv;
  uniform sampler2D uTexture;

  void main () {
    gl_FragColor = texture2D(uTexture, vUv);
  }
`,Y=`
  precision mediump float;
  precision mediump sampler2D;
  varying highp vec2 vUv;
  uniform sampler2D uTexture;
  uniform float value;

  void main () {
    gl_FragColor = value * texture2D(uTexture, vUv);
  }
`,q=`
  precision highp float;
  precision highp sampler2D;
  varying vec2 vUv;
  uniform sampler2D uTexture;

  void main () {
    vec3 c = texture2D(uTexture, vUv).rgb;
    float a = max(c.r, max(c.g, c.b));
    gl_FragColor = vec4(c, a);
  }
`,$=`
  precision highp float;
  precision highp sampler2D;
  varying vec2 vUv;
  uniform sampler2D uTarget;
  uniform float aspectRatio;
  uniform vec3 color;
  uniform vec2 point;
  uniform float radius;

  void main () {
    vec2 p = vUv - point.xy;
    p.x *= aspectRatio;
    vec3 splat = exp(-dot(p, p) / radius) * color;
    vec3 base = texture2D(uTarget, vUv).xyz;
    gl_FragColor = vec4(base + splat, 1.0);
  }
`,J=`
  precision highp float;
  precision highp sampler2D;
  varying vec2 vUv;
  uniform sampler2D uVelocity;
  uniform sampler2D uSource;
  uniform vec2 texelSize;
  uniform float dt;
  uniform float dissipation;

  void main () {
    vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;
    vec4 result = dissipation * texture2D(uSource, coord);
    float decay = 1.0 + dt * 0.1;
    gl_FragColor = result / decay;
  }
`,K=`
  precision mediump float;
  precision mediump sampler2D;
  varying highp vec2 vUv;
  varying highp vec2 vL;
  varying highp vec2 vR;
  varying highp vec2 vT;
  varying highp vec2 vB;
  uniform sampler2D uVelocity;

  void main () {
    float L = texture2D(uVelocity, vL).x;
    float R = texture2D(uVelocity, vR).x;
    float T = texture2D(uVelocity, vT).y;
    float B = texture2D(uVelocity, vB).y;
    vec2 C = texture2D(uVelocity, vUv).xy;

    if (vL.x < 0.0) { L = -C.x; }
    if (vR.x > 1.0) { R = -C.x; }
    if (vT.y > 1.0) { T = -C.y; }
    if (vB.y < 0.0) { B = -C.y; }

    float div = 0.5 * (R - L + T - B);
    gl_FragColor = vec4(div, 0.0, 0.0, 1.0);
  }
`,Q=`
  precision mediump float;
  precision mediump sampler2D;
  varying highp vec2 vUv;
  varying highp vec2 vL;
  varying highp vec2 vR;
  varying highp vec2 vT;
  varying highp vec2 vB;
  uniform sampler2D uVelocity;

  void main () {
    float L = texture2D(uVelocity, vL).y;
    float R = texture2D(uVelocity, vR).y;
    float T = texture2D(uVelocity, vT).x;
    float B = texture2D(uVelocity, vB).x;
    float vorticity = R - L - T + B;
    gl_FragColor = vec4(0.5 * vorticity, 0.0, 0.0, 1.0);
  }
`,Z=`
  precision highp float;
  precision highp sampler2D;
  varying vec2 vUv;
  varying vec2 vL;
  varying vec2 vR;
  varying vec2 vT;
  varying vec2 vB;
  uniform sampler2D uVelocity;
  uniform sampler2D uCurl;
  uniform float curl;
  uniform float dt;

  void main () {
    float L = texture2D(uCurl, vL).x;
    float R = texture2D(uCurl, vR).x;
    float T = texture2D(uCurl, vT).x;
    float B = texture2D(uCurl, vB).x;
    float C = texture2D(uCurl, vUv).x;

    vec2 force = 0.5 * vec2(abs(T) - abs(B), abs(R) - abs(L));
    force /= length(force) + 0.0001;
    force *= curl * C;
    force.y *= -1.0;

    vec2 velocity = texture2D(uVelocity, vUv).xy;
    velocity += force * dt;
    gl_FragColor = vec4(velocity, 0.0, 1.0);
  }
`,ee=`
  precision mediump float;
  precision mediump sampler2D;
  varying highp vec2 vUv;
  varying highp vec2 vL;
  varying highp vec2 vR;
  varying highp vec2 vT;
  varying highp vec2 vB;
  uniform sampler2D uPressure;
  uniform sampler2D uDivergence;

  void main () {
    float L = texture2D(uPressure, vL).x;
    float R = texture2D(uPressure, vR).x;
    float T = texture2D(uPressure, vT).x;
    float B = texture2D(uPressure, vB).x;
    float C = texture2D(uPressure, vUv).x;
    float divergence = texture2D(uDivergence, vUv).x;
    float pressure = (L + R + B + T - divergence) * 0.25;
    gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);
  }
`,te=`
  precision mediump float;
  precision mediump sampler2D;
  varying highp vec2 vUv;
  varying highp vec2 vL;
  varying highp vec2 vR;
  varying highp vec2 vT;
  varying highp vec2 vB;
  uniform sampler2D uPressure;
  uniform sampler2D uVelocity;

  void main () {
    float L = texture2D(uPressure, vL).x;
    float R = texture2D(uPressure, vR).x;
    float T = texture2D(uPressure, vT).x;
    float B = texture2D(uPressure, vB).x;
    vec2 velocity = texture2D(uVelocity, vUv).xy;
    velocity.xy -= vec2(R - L, T - B);
    gl_FragColor = vec4(velocity, 0.0, 1.0);
  }
`,re=`
  precision highp float;
  precision highp sampler2D;
  varying vec2 vUv;
  uniform sampler2D uVelocity;
  uniform vec2 gravity;
  uniform float dt;

  void main () {
    vec2 velocity = texture2D(uVelocity, vUv).xy;
    velocity += gravity * dt;
    gl_FragColor = vec4(velocity, 0.0, 1.0);
  }
`;class ie{canvas;gl;ext;programs;dye;velocity;divergence;curl;pressure;blit;simWidth=128;simHeight=128;dyeWidth=1024;dyeHeight=1024;density=.97;velocityDissipation=.98;pressureIterations=20;curlStrength=30;splatRadius=.25;gravityStrength=100;gravityX=0;gravityY=0;constructor(e){this.canvas=e;const r={alpha:!0,depth:!1,stencil:!1,antialias:!1,preserveDrawingBuffer:!1};let t=e.getContext("webgl2",r);const a=!!t;if(t||(t=e.getContext("webgl",r)||e.getContext("experimental-webgl",r)),!t)throw new Error("WebGL not supported");this.gl=t,a?t.getExtension("EXT_color_buffer_float"):(t.getExtension("OES_texture_half_float"),t.getExtension("OES_texture_half_float_linear"));const s=a?t.HALF_FLOAT:t.getExtension("OES_texture_half_float")?.HALF_FLOAT_OES||t.UNSIGNED_BYTE,o=this.getSupportedFormat(t,a?t.RGBA16F:t.RGBA,t.RGBA,s),i=this.getSupportedFormat(t,a?t.RG16F:t.RGBA,a?t.RG:t.RGBA,s),m=this.getSupportedFormat(t,a?t.R16F:t.RGBA,a?t.RED:t.RGBA,s);this.ext={formatRGBA:o,formatRG:i,formatR:m,halfFloatTexType:s,supportLinearFiltering:!!t.getExtension("OES_texture_half_float_linear")||a};const c=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,c),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),t.STATIC_DRAW);const v=t.createBuffer();t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,v),t.bufferData(t.ELEMENT_ARRAY_BUFFER,new Uint16Array([0,1,2,0,2,3]),t.STATIC_DRAW),t.vertexAttribPointer(0,2,t.FLOAT,!1,0,0),t.enableVertexAttribArray(0),this.blit=f=>{f?(t.viewport(0,0,f.width,f.height),t.bindFramebuffer(t.FRAMEBUFFER,f.fbo)):(t.viewport(0,0,t.drawingBufferWidth,t.drawingBufferHeight),t.bindFramebuffer(t.FRAMEBUFFER,null)),t.drawElements(t.TRIANGLES,6,t.UNSIGNED_SHORT,0)},this.programs={copy:this.createProgram(x,k),clear:this.createProgram(x,Y),display:this.createProgram(x,q),splat:this.createProgram(x,$),advection:this.createProgram(x,J),divergence:this.createProgram(x,K),curl:this.createProgram(x,Q),vorticity:this.createProgram(x,Z),pressure:this.createProgram(x,ee),gradientSubtract:this.createProgram(x,te),externalForce:this.createProgram(x,re)},this.initFramebuffers()}getSupportedFormat(e,r,t,a){return this.supportRenderTextureFormat(e,r,t,a)?{internalFormat:r,format:t}:{internalFormat:e.RGBA,format:e.RGBA}}supportRenderTextureFormat(e,r,t,a){const s=e.createTexture();e.bindTexture(e.TEXTURE_2D,s),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texImage2D(e.TEXTURE_2D,0,r,4,4,0,t,a,null);const o=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,o),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,s,0);const i=e.checkFramebufferStatus(e.FRAMEBUFFER);return e.deleteTexture(s),e.deleteFramebuffer(o),e.bindFramebuffer(e.FRAMEBUFFER,null),i===e.FRAMEBUFFER_COMPLETE}createProgram(e,r){const t=this.gl,a=t.createShader(t.VERTEX_SHADER);t.shaderSource(a,e),t.compileShader(a);const s=t.createShader(t.FRAGMENT_SHADER);t.shaderSource(s,r),t.compileShader(s);const o=t.createProgram();t.attachShader(o,a),t.attachShader(o,s),t.linkProgram(o);const i={},m=t.getProgramParameter(o,t.ACTIVE_UNIFORMS);for(let c=0;c<m;c++){const v=t.getActiveUniform(o,c);if(v){const f=t.getUniformLocation(o,v.name);f&&(i[v.name]=f)}}return{program:o,uniforms:i,bind:()=>t.useProgram(o)}}createFBO(e,r,t,a,s,o){const i=this.gl;i.activeTexture(i.TEXTURE0);const m=i.createTexture();i.bindTexture(i.TEXTURE_2D,m),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,o),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MAG_FILTER,o),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),i.texImage2D(i.TEXTURE_2D,0,t,e,r,0,a,s,null);const c=i.createFramebuffer();return i.bindFramebuffer(i.FRAMEBUFFER,c),i.framebufferTexture2D(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,m,0),i.viewport(0,0,e,r),i.clear(i.COLOR_BUFFER_BIT),{texture:m,fbo:c,width:e,height:r,attach:v=>(i.activeTexture(i.TEXTURE0+v),i.bindTexture(i.TEXTURE_2D,m),v)}}createDoubleFBO(e,r,t,a,s,o){let i=this.createFBO(e,r,t,a,s,o),m=this.createFBO(e,r,t,a,s,o);return{width:e,height:r,texelSizeX:1/e,texelSizeY:1/r,get read(){return i},set read(c){i=c},get write(){return m},set write(c){m=c},swap(){const c=i;i=m,m=c}}}initFramebuffers(){const e=this.gl,r=this.getResolution(this.simWidth),t=this.getResolution(this.dyeWidth);this.simWidth=r.width,this.simHeight=r.height,this.dyeWidth=t.width,this.dyeHeight=t.height;const a=this.ext.halfFloatTexType,s=this.ext.formatRGBA,o=this.ext.formatRG,i=this.ext.formatR,m=this.ext.supportLinearFiltering?e.LINEAR:e.NEAREST;this.dye=this.createDoubleFBO(this.dyeWidth,this.dyeHeight,s.internalFormat,s.format,a,m),this.velocity=this.createDoubleFBO(this.simWidth,this.simHeight,o.internalFormat,o.format,a,m),this.divergence=this.createFBO(this.simWidth,this.simHeight,i.internalFormat,i.format,a,e.NEAREST),this.curl=this.createFBO(this.simWidth,this.simHeight,i.internalFormat,i.format,a,e.NEAREST),this.pressure=this.createDoubleFBO(this.simWidth,this.simHeight,i.internalFormat,i.format,a,e.NEAREST)}getResolution(e){const r=this.gl;let t=r.drawingBufferWidth/r.drawingBufferHeight;t<1&&(t=1/t);const a=Math.round(e),s=Math.round(e*t);return r.drawingBufferWidth>r.drawingBufferHeight?{width:s,height:a}:{width:a,height:s}}resize(){const e=this.canvas.clientWidth,r=this.canvas.clientHeight;(this.canvas.width!==e||this.canvas.height!==r)&&(this.canvas.width=e,this.canvas.height=r,this.initFramebuffers())}setGravity(e,r){this.gravityX=e,this.gravityY=r}splat(e,r,t,a,s){const o=this.gl;this.programs.splat.bind(),o.uniform1i(this.programs.splat.uniforms.uTarget,this.velocity.read.attach(0)),o.uniform1f(this.programs.splat.uniforms.aspectRatio,this.canvas.width/this.canvas.height),o.uniform2f(this.programs.splat.uniforms.point,e,r),o.uniform3f(this.programs.splat.uniforms.color,t,a,0),o.uniform1f(this.programs.splat.uniforms.radius,this.correctRadius(this.splatRadius/100)),this.blit(this.velocity.write),this.velocity.swap(),o.uniform1i(this.programs.splat.uniforms.uTarget,this.dye.read.attach(0)),o.uniform3f(this.programs.splat.uniforms.color,s[0],s[1],s[2]),this.blit(this.dye.write),this.dye.swap()}correctRadius(e){const r=this.canvas.width/this.canvas.height;return r>1?e*r:e}step(e){const r=this.gl;r.disable(r.BLEND),(Math.abs(this.gravityX)>.01||Math.abs(this.gravityY)>.01)&&(this.programs.externalForce.bind(),r.uniform2f(this.programs.externalForce.uniforms.texelSize,this.velocity.texelSizeX,this.velocity.texelSizeY),r.uniform1i(this.programs.externalForce.uniforms.uVelocity,this.velocity.read.attach(0)),r.uniform2f(this.programs.externalForce.uniforms.gravity,this.gravityX*this.gravityStrength,this.gravityY*this.gravityStrength),r.uniform1f(this.programs.externalForce.uniforms.dt,e),this.blit(this.velocity.write),this.velocity.swap()),this.programs.curl.bind(),r.uniform2f(this.programs.curl.uniforms.texelSize,this.velocity.texelSizeX,this.velocity.texelSizeY),r.uniform1i(this.programs.curl.uniforms.uVelocity,this.velocity.read.attach(0)),this.blit(this.curl),this.programs.vorticity.bind(),r.uniform2f(this.programs.vorticity.uniforms.texelSize,this.velocity.texelSizeX,this.velocity.texelSizeY),r.uniform1i(this.programs.vorticity.uniforms.uVelocity,this.velocity.read.attach(0)),r.uniform1i(this.programs.vorticity.uniforms.uCurl,this.curl.attach(1)),r.uniform1f(this.programs.vorticity.uniforms.curl,this.curlStrength),r.uniform1f(this.programs.vorticity.uniforms.dt,e),this.blit(this.velocity.write),this.velocity.swap(),this.programs.divergence.bind(),r.uniform2f(this.programs.divergence.uniforms.texelSize,this.velocity.texelSizeX,this.velocity.texelSizeY),r.uniform1i(this.programs.divergence.uniforms.uVelocity,this.velocity.read.attach(0)),this.blit(this.divergence),this.programs.clear.bind(),r.uniform1i(this.programs.clear.uniforms.uTexture,this.pressure.read.attach(0)),r.uniform1f(this.programs.clear.uniforms.value,.8),this.blit(this.pressure.write),this.pressure.swap(),this.programs.pressure.bind(),r.uniform2f(this.programs.pressure.uniforms.texelSize,this.velocity.texelSizeX,this.velocity.texelSizeY),r.uniform1i(this.programs.pressure.uniforms.uDivergence,this.divergence.attach(0));for(let a=0;a<this.pressureIterations;a++)r.uniform1i(this.programs.pressure.uniforms.uPressure,this.pressure.read.attach(1)),this.blit(this.pressure.write),this.pressure.swap();this.programs.gradientSubtract.bind(),r.uniform2f(this.programs.gradientSubtract.uniforms.texelSize,this.velocity.texelSizeX,this.velocity.texelSizeY),r.uniform1i(this.programs.gradientSubtract.uniforms.uPressure,this.pressure.read.attach(0)),r.uniform1i(this.programs.gradientSubtract.uniforms.uVelocity,this.velocity.read.attach(1)),this.blit(this.velocity.write),this.velocity.swap(),this.programs.advection.bind(),r.uniform2f(this.programs.advection.uniforms.texelSize,this.velocity.texelSizeX,this.velocity.texelSizeY);const t=this.velocity.read.attach(0);r.uniform1i(this.programs.advection.uniforms.uVelocity,t),r.uniform1i(this.programs.advection.uniforms.uSource,t),r.uniform1f(this.programs.advection.uniforms.dt,e),r.uniform1f(this.programs.advection.uniforms.dissipation,this.velocityDissipation),this.blit(this.velocity.write),this.velocity.swap(),r.uniform2f(this.programs.advection.uniforms.texelSize,this.dye.texelSizeX,this.dye.texelSizeY),r.uniform1i(this.programs.advection.uniforms.uVelocity,this.velocity.read.attach(0)),r.uniform1i(this.programs.advection.uniforms.uSource,this.dye.read.attach(1)),r.uniform1f(this.programs.advection.uniforms.dissipation,this.density),this.blit(this.dye.write),this.dye.swap()}render(){const e=this.gl;e.blendFunc(e.ONE,e.ONE_MINUS_SRC_ALPHA),e.enable(e.BLEND),this.programs.display.bind(),e.uniform1i(this.programs.display.uniforms.uTexture,this.dye.read.attach(0)),this.blit(null)}clear(){const e=this.gl;this.programs.clear.bind(),e.uniform1f(this.programs.clear.uniforms.value,0),e.uniform1i(this.programs.clear.uniforms.uTexture,this.dye.read.attach(0)),this.blit(this.dye.write),this.dye.swap(),e.uniform1i(this.programs.clear.uniforms.uTexture,this.velocity.read.attach(0)),this.blit(this.velocity.write),this.velocity.swap()}}const ae="/claude-playground",p=.4,E={rainbow:()=>{const d=Math.random(),[e,r,t]=se(d,1,.5);return[e*p,r*p,t*p]},fire:()=>{const d=Math.random();return[1*p,(.2+d*.5)*p,d*.2*p]},ocean:()=>{const d=Math.random();return[d*.3*p,(.5+d*.3)*p,(.8+d*.2)*p]},neon:()=>{const d=[[0,.82*p,1*p],[.67*p,.4*p,1*p],[1*p,.4*p,.67*p],[0,1*p,.53*p]];return d[Math.floor(Math.random()*d.length)]}};function se(d,e,r){let t,a,s;{const o=(c,v,f)=>(f<0&&(f+=1),f>1&&(f-=1),f<.16666666666666666?c+(v-c)*6*f:f<.5?v:f<.6666666666666666?c+(v-c)*(.6666666666666666-f)*6:c),i=r+e-r*e,m=2*r-i;t=o(m,i,d+1/3),a=o(m,i,d),s=o(m,i,d-1/3)}return[t,a,s]}function oe(){const d=g.useRef(null),e=g.useRef(null),r=g.useRef(0),t=g.useRef(0),a=g.useRef([]),[s,o]=g.useState("tilt"),[i,m]=g.useState("neon"),[c,v]=g.useState("unknown"),[f,B]=g.useState({beta:0,gamma:0}),[F,P]=g.useState(!0),y=g.useRef({x:0,y:0});g.useEffect(()=>{"DeviceOrientationEvent"in window?v("prompt"):(v("unavailable"),o("touch"))},[]);const M=g.useCallback(async()=>{try{typeof DeviceOrientationEvent.requestPermission=="function"?await DeviceOrientationEvent.requestPermission()==="granted"?(v("granted"),w()):(v("denied"),o("touch")):(v("granted"),w())}catch{v("denied"),o("touch")}},[]),w=()=>{window.addEventListener("deviceorientation",n=>{const l=n.beta??0,h=n.gamma??0;B({beta:l,gamma:h})})};g.useEffect(()=>{if(!d.current)return;const n=d.current;n.width=n.clientWidth*window.devicePixelRatio,n.height=n.clientHeight*window.devicePixelRatio;try{e.current=new ie(n)}catch(h){console.error("Failed to initialize fluid simulation:",h);return}setTimeout(()=>{if(e.current)for(let h=0;h<5;h++){const b=.3+Math.random()*.4,R=.3+Math.random()*.4,T=(Math.random()-.5)*100,j=(Math.random()-.5)*100;e.current.splat(b,R,T,j,E[i]())}},100);const l=()=>{n&&e.current&&(n.width=n.clientWidth*window.devicePixelRatio,n.height=n.clientHeight*window.devicePixelRatio,e.current.resize())};return window.addEventListener("resize",l),()=>{window.removeEventListener("resize",l),r.current&&cancelAnimationFrame(r.current)}},[]),g.useEffect(()=>{if(s!=="tilt"||c!=="granted")return;const n=f.beta*Math.PI/180,l=f.gamma*Math.PI/180,h=Math.sin(l),b=-Math.sin(n),R=Math.max(-1,Math.min(1,h)),T=Math.max(-1,Math.min(1,b));y.current.x+=(R-y.current.x)*.15,y.current.y+=(T-y.current.y)*.15},[f,s,c]),g.useEffect(()=>{const n=l=>{if(!e.current){r.current=requestAnimationFrame(n);return}const h=Math.min((l-t.current)/1e3,.016);t.current=l,s==="tilt"&&c==="granted"?e.current.setGravity(y.current.x,y.current.y):e.current.setGravity(0,0),e.current.step(h),e.current.render(),r.current=requestAnimationFrame(n)};return r.current=requestAnimationFrame(n),()=>{r.current&&cancelAnimationFrame(r.current)}},[s,c]);const _=n=>{const l=d.current;if(!l)return{x:0,y:0};const h=l.getBoundingClientRect();return{x:(n.clientX-h.left)/h.width,y:1-(n.clientY-h.top)/h.height}},C=n=>{const l=_(n);a.current.push({...l,id:n.pointerId}),e.current&&e.current.splat(l.x,l.y,0,0,E[i]())},L=n=>{const l=a.current.find(T=>T.id===n.pointerId);if(!l||!e.current)return;const h=_(n),b=(h.x-l.x)*1e3,R=(h.y-l.y)*1e3;(Math.abs(b)>.1||Math.abs(R)>.1)&&e.current.splat(h.x,h.y,b,R,E[i]()),l.x=h.x,l.y=h.y},S=n=>{a.current=a.current.filter(l=>l.id!==n.pointerId)},N=()=>{e.current?.clear()},z=()=>{if(e.current){e.current.clear();for(let n=0;n<5;n++){const l=.3+Math.random()*.4,h=.3+Math.random()*.4,b=(Math.random()-.5)*100,R=(Math.random()-.5)*100;e.current.splat(l,h,b,R,E[i]())}}};return u.jsxs("div",{className:"h-[100dvh] flex flex-col bg-bg-primary overflow-hidden",children:[u.jsx("canvas",{ref:d,className:"absolute inset-0 w-full h-full touch-none",onPointerDown:C,onPointerMove:L,onPointerUp:S,onPointerLeave:S,onPointerCancel:S}),u.jsxs("header",{className:"relative z-10 p-4 flex items-center justify-between",children:[u.jsx("a",{href:`${ae}/`,className:"flex items-center justify-center w-10 h-10 rounded-full bg-bg-card/80 backdrop-blur-sm text-text-secondary hover:text-accent-cyan transition-colors",children:u.jsx(O,{className:"w-5 h-5"})}),u.jsx("h1",{className:"text-lg font-bold bg-gradient-to-r from-accent-cyan to-accent-purple bg-clip-text text-transparent",children:"Fluid Sim"}),u.jsx("button",{onClick:()=>P(!F),className:"w-10 h-10 rounded-full bg-bg-card/80 backdrop-blur-sm text-text-secondary flex items-center justify-center",children:u.jsx("span",{className:"text-lg",children:F?"−":"+"})})]}),s==="tilt"&&c==="granted"&&u.jsx("div",{className:"absolute top-20 left-1/2 -translate-x-1/2 z-10",children:u.jsxs("div",{className:"relative w-16 h-16 rounded-full border-2 border-accent-cyan/30 bg-bg-card/50 backdrop-blur-sm",children:[u.jsx("div",{className:"absolute w-3 h-3 rounded-full bg-accent-cyan shadow-lg shadow-accent-cyan/50",style:{left:`${50+y.current.x*40}%`,top:`${50+y.current.y*40}%`,transform:"translate(-50%, -50%)"}}),u.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:u.jsx("div",{className:"w-1 h-1 rounded-full bg-text-muted"})})]})}),F&&u.jsxs("div",{className:"absolute bottom-0 left-0 right-0 z-10 p-4 pb-8 bg-gradient-to-t from-bg-primary/90 to-transparent",children:[c==="prompt"&&s==="tilt"&&u.jsxs("button",{onClick:M,className:"w-full mb-4 py-3 px-4 rounded-xl bg-accent-cyan/20 border border-accent-cyan/30 text-accent-cyan font-medium flex items-center justify-center gap-2",children:[u.jsx(A,{className:"w-5 h-5"}),"Enable Tilt Control"]}),c==="denied"&&u.jsx("div",{className:"mb-4 py-2 px-4 rounded-xl bg-accent-red/10 border border-accent-red/20 text-accent-red text-sm text-center",children:"Orientation access denied. Using touch mode."}),u.jsxs("div",{className:"flex items-center justify-center gap-2 mb-4",children:[u.jsxs("button",{onClick:()=>o("tilt"),disabled:c==="unavailable"||c==="denied",className:D("flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all",s==="tilt"?"bg-accent-cyan/20 text-accent-cyan":"bg-bg-card/80 text-text-secondary",(c==="unavailable"||c==="denied")&&"opacity-50 cursor-not-allowed"),children:[u.jsx(A,{className:"w-4 h-4"}),"Tilt"]}),u.jsxs("button",{onClick:()=>o("touch"),className:D("flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all",s==="touch"?"bg-accent-purple/20 text-accent-purple":"bg-bg-card/80 text-text-secondary"),children:[u.jsx(I,{className:"w-4 h-4"}),"Touch"]})]}),u.jsx("div",{className:"flex items-center justify-center gap-2 mb-4",children:["rainbow","fire","ocean","neon"].map(n=>u.jsx("button",{onClick:()=>m(n),className:D("px-3 py-1.5 rounded-full text-xs font-medium capitalize transition-all",i===n?"bg-white/20 text-white":"bg-bg-card/60 text-text-secondary"),children:n},n))}),u.jsxs("div",{className:"flex items-center justify-center gap-3",children:[u.jsxs("button",{onClick:N,className:"flex items-center gap-2 px-4 py-2 rounded-full bg-bg-card/80 text-text-secondary text-sm font-medium",children:[u.jsx(W,{className:"w-4 h-4"}),"Clear"]}),u.jsxs("button",{onClick:z,className:"flex items-center gap-2 px-4 py-2 rounded-full bg-bg-card/80 text-text-secondary text-sm font-medium",children:[u.jsx(V,{className:"w-4 h-4"}),"Reset"]})]}),u.jsx("p",{className:"mt-4 text-center text-text-muted text-xs",children:s==="tilt"?"Tilt your phone to move the fluid. Touch to add color.":"Drag to add force and color to the fluid."})]})]})}X.createRoot(document.getElementById("root")).render(u.jsx(g.StrictMode,{children:u.jsx(oe,{})}));
