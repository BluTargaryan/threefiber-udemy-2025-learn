'use client'

import { useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import type { DirectionalLight, Mesh } from 'three'
import ScrollAnimation from './ScrollAnimation'

function ScrollScene() {
  const meshRef = useRef<Mesh>(null)
  const lightRef = useRef<DirectionalLight>(null)
  const { camera } = useThree()

  useFrame((state) => {
    if (!meshRef.current) return
    meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.08
  })

  return (
    <>
      <ambientLight intensity={0.45} />
      <directionalLight ref={lightRef} position={[2, 2, 2]} intensity={1} />

      <mesh ref={meshRef}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#2f7cf6" metalness={0.2} roughness={0.25} />
      </mesh>

      <ScrollAnimation
        meshRef={meshRef}
        cameraRef={{ current: camera }}
        lightRef={lightRef}
      />
    </>
  )
}

export default function ScrollInteractionCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 3], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true }}
    >
      <ScrollScene />
    </Canvas>
  )
}
