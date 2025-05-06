'use client'

import {
    Stats,
    OrbitControls,
    ContactShadows,
  } from '@react-three/drei'
  import { Canvas} from '@react-three/fiber'
  import { Leva} from 'leva'
  import Model from './SceneModelGLTF'
  import Env from './SceneEnvGLTF'
  import { Suspense } from 'react'
  
  
  
  
  
  function Scene() {
    return (
      <>
        <Env />
        <Model />
        <ContactShadows
          scale={150}
          position={[0.33, -0.33, 0.33]}
          opacity={1.5}
        />
        <OrbitControls target={[0, 1, 0]} maxPolarAngle={Math.PI / 2} />
        <Stats />
      </>
    )
  }
  
  export default function App() {
    return (
      <>
        <Canvas camera={{ position: [-8, 5, 8] }}>
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
        <Leva collapsed />
      </>
    )
  }