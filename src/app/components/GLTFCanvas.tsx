'use client'

import { Stats, OrbitControls, Circle, Environment, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'

function Model() {
  const gltf = useGLTF('/monkey.glb')
  return (
    <primitive
      object={gltf.scene}
      position={[0, 1, 0]}
      children-0-castShadow
    />
  )
}

function Scene() {
  return (
    <>
      <Environment
        files="/venice_sunset_1k.hdr"
        background
        backgroundBlurriness={0.5}
      />
      <Model />
      <directionalLight
        position={[3.3, 1.0, 4.4]}
        castShadow
        intensity={Math.PI * 2}
      />
      <Circle args={[10]} rotation-x={-Math.PI / 2} receiveShadow>
        <meshStandardMaterial />
      </Circle>
      <OrbitControls target={[0, 1, 0]} />
      <axesHelper args={[5]} />
      <Stats />
    </>
  )
}

export default function App() {
  return (
    <Canvas camera={{ position: [-0.5, 1, 2] }} shadows>
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  )
}