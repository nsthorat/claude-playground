import { useRef, useEffect } from 'react'
import { useFrame, useThree, extend } from '@react-three/fiber'
import { shaderMaterial } from '@react-three/drei'
import * as THREE from 'three'
import { GPUComputationRenderer } from 'three/examples/jsm/misc/GPUComputationRenderer.js'
import {
  heightmapFragmentShader,
  waterVertexShader,
  waterFragmentShader,
} from './shaders'

const WIDTH = 128 // Heightmap resolution

// Custom water material
const WaterMaterial = shaderMaterial(
  {
    heightmap: null,
    heightScale: 1.0,
    waterColor: new THREE.Color(0x0077be),
    deepWaterColor: new THREE.Color(0x001a33),
    foamColor: new THREE.Color(0xffffff),
    lightPosition: new THREE.Vector3(10, 20, 10),
    time: 0,
  },
  waterVertexShader,
  waterFragmentShader
)

extend({ WaterMaterial })

// Declare module for TypeScript
declare module '@react-three/fiber' {
  interface ThreeElements {
    waterMaterial: React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement> & {
        heightmap?: THREE.Texture | null
        heightScale?: number
        waterColor?: THREE.Color
        deepWaterColor?: THREE.Color
        foamColor?: THREE.Color
        lightPosition?: THREE.Vector3
        time?: number
        transparent?: boolean
        side?: THREE.Side
      },
      HTMLElement
    >
  }
}

interface GPUWaterProps {
  gravity: { x: number; y: number }
  mousePos: { x: number; y: number } | null
  onReady?: () => void
}

export default function GPUWater({ gravity, mousePos, onReady }: GPUWaterProps) {
  const meshRef = useRef<THREE.Mesh>(null)
  const materialRef = useRef<THREE.ShaderMaterial>(null)
  const gpuComputeRef = useRef<GPUComputationRenderer | null>(null)
  const heightmapVariableRef = useRef<{
    material: THREE.ShaderMaterial
  } | null>(null)

  const { gl } = useThree()

  // Initialize GPU computation
  useEffect(() => {
    // Check for WebGL2 and float texture support for iOS compatibility
    const isWebGL2 = gl.capabilities.isWebGL2
    const floatTextureSupport = gl.extensions.get('EXT_color_buffer_float')

    // Use HalfFloatType on iOS/devices without full float support
    const textureType =
      isWebGL2 && floatTextureSupport
        ? THREE.FloatType
        : THREE.HalfFloatType

    console.log(
      `Water simulation using ${textureType === THREE.FloatType ? 'FloatType' : 'HalfFloatType'}`
    )

    const gpuCompute = new GPUComputationRenderer(WIDTH, WIDTH, gl)

    // Set texture type for iOS compatibility
    gpuCompute.setDataType(textureType)

    // Create initial heightmap texture
    const heightmap0 = gpuCompute.createTexture()
    const pixels = heightmap0.image.data as Float32Array
    for (let i = 0; i < pixels.length; i += 4) {
      pixels[i] = 0 // height
      pixels[i + 1] = 0 // velocity
      pixels[i + 2] = 0
      pixels[i + 3] = 1
    }

    // Add heightmap variable
    const heightmapVariable = gpuCompute.addVariable(
      'heightmap',
      heightmapFragmentShader,
      heightmap0
    )

    // Set dependencies
    gpuCompute.setVariableDependencies(heightmapVariable, [heightmapVariable])

    // Set uniforms
    heightmapVariable.material.uniforms.mousePos = { value: new THREE.Vector2(-1, -1) }
    heightmapVariable.material.uniforms.mouseSize = { value: 0.05 }
    heightmapVariable.material.uniforms.viscosity = { value: 0.985 }
    heightmapVariable.material.uniforms.gravity = { value: new THREE.Vector2(0, 0) }
    heightmapVariable.material.uniforms.gravityStrength = { value: 1.0 }

    // Initialize
    const error = gpuCompute.init()
    if (error !== null) {
      console.error('GPUComputationRenderer error:', error)
      return
    }

    gpuComputeRef.current = gpuCompute
    heightmapVariableRef.current = heightmapVariable

    onReady?.()

    return () => {
      gpuCompute.dispose()
    }
  }, [gl, onReady])

  // Update simulation each frame
  useFrame((state) => {
    const gpuCompute = gpuComputeRef.current
    const heightmapVariable = heightmapVariableRef.current

    if (!gpuCompute || !heightmapVariable) return

    // Update uniforms
    if (mousePos) {
      heightmapVariable.material.uniforms.mousePos.value.set(mousePos.x, mousePos.y)
    } else {
      heightmapVariable.material.uniforms.mousePos.value.set(-1, -1)
    }

    heightmapVariable.material.uniforms.gravity.value.set(gravity.x, gravity.y)

    // Run simulation step
    gpuCompute.compute()

    // Update water material with new heightmap
    if (materialRef.current) {
      materialRef.current.uniforms.heightmap.value =
        gpuCompute.getCurrentRenderTarget(heightmapVariable).texture
      materialRef.current.uniforms.time.value = state.clock.elapsedTime
    }
  })

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
      <planeGeometry args={[10, 10, WIDTH - 1, WIDTH - 1]} />
      {/* @ts-expect-error - custom material */}
      <waterMaterial
        ref={materialRef}
        heightmap={null}
        heightScale={2.0}
        waterColor={new THREE.Color(0x0088cc)}
        deepWaterColor={new THREE.Color(0x003366)}
        foamColor={new THREE.Color(0xaaddff)}
        lightPosition={new THREE.Vector3(5, 15, 5)}
        time={0}
        transparent={true}
        side={THREE.DoubleSide}
      />
    </mesh>
  )
}
