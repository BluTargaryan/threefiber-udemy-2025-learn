'use client'

import { Canvas } from '@react-three/fiber'
import { Stats, OrbitControls, Environment, useGLTF } from '@react-three/drei'
import { useControls } from 'leva'
import { Suspense } from 'react'

const Models = [
  { title: 'Hammer', url: '/models/hammer.glb' },
  { title: 'Drill', url: '/models/drill.glb' },
  { title: 'Tape Measure', url: '/models/tapeMeasure.glb' },
]

function Model({ url }: { url: string }) {
  const { scene } = useGLTF(url)
  return <primitive object={scene} />
}

function Scene({ modelUrl }: { modelUrl: string }) {
  return (
    <>
      <Environment files="/img/workshop_1k.hdr" background />
      <group>
        <Model url={modelUrl} />
      </group>
      <OrbitControls autoRotate />
      <Stats />
    </>
  )
}

export default function App() {
  const { title } = useControls({
    title: {
      options: Models.map(({ title }) => title),
    },
  })

  const modelUrl = Models[Models.findIndex((m) => m.title === title)].url

  return (
    <>
      <Canvas camera={{ position: [0, 0, -0.2], near: 0.025 }}>
        <Suspense fallback={null}>
          <Scene modelUrl={modelUrl} />
        </Suspense>
      </Canvas>
      <span id="info">The {title} is selected.</span>
    </>
  )
}