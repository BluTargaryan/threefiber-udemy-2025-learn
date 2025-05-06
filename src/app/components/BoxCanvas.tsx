'use client'

import React, { useMemo } from 'react'
import { Canvas } from '@react-three/fiber'
import Polyhedron from './Polyhedron'
import { Stats, OrbitControls } from "@react-three/drei"
import { useControls, Leva } from 'leva'
import * as THREE from 'three'
import { Suspense } from 'react'

interface PolyhedronControls {
  x: number
  y: number
  z: number
  visible: boolean
  color: string
}

interface SceneProps {
  polyhedron: THREE.BufferGeometry[]
  pA: PolyhedronControls
  pB: PolyhedronControls
  pC: PolyhedronControls
}

function Scene({ polyhedron, pA, pB, pC }: SceneProps) {
  return (
    <>
      <color attach="background" args={['#d0d0d0']} />
      <Polyhedron 
        position={[-3, 0, 0]} 
        name="Polyhedron 1" 
        wireFrame={true} 
        polyhedron={polyhedron} 
        rotation={[pA.x, pA.y, pA.z]} 
        visible={pA.visible} 
        color={pA.color} 
      />
      <Polyhedron 
        position={[0,0, 0]} 
        name="Polyhedron 2" 
        wireFrame={false} 
        polyhedron={polyhedron} 
        rotation={[pB.x, pB.y, pB.z]} 
        visible={pB.visible} 
        color={pB.color} 
      />
      <Polyhedron 
        position={[3,0, 0]} 
        name="Polyhedron 3" 
        wireFrame={false} 
        polyhedron={polyhedron} 
        rotation={[pC.x, pC.y, pC.z]} 
        visible={pB.visible} 
        color={pC.color} 
      />
      <Stats />
      <OrbitControls />
      <axesHelper args={[5]} />
      <gridHelper />
    </>
  )
}

const BoxCanvas = () => {
  const options = useMemo(() => ({
    x: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
    y: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
    z: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
    visible: true,
    color: { value: '#4354b5' }
  }), [])

  const pA = useControls('Polyhedron A', options)
  const pB = useControls('Polyhedron B', options)
  const pC = useControls('Polyhedron C', options)

  const polyhedron = useMemo(() => [
    new THREE.BoxGeometry(), 
    new THREE.SphereGeometry(0.785),
    new THREE.DodecahedronGeometry(0.7853)
  ], [])

  return (
    <>
      <Canvas camera={{ position: [0, 0, 10] }} className='flex-1'>
        <Suspense fallback={null}>
          <Scene 
            polyhedron={polyhedron} 
            pA={{
              x: pA.x,
              y: pA.y,
              z: pA.z,
              visible: pA.visible,
              color: pA.color
            }}
            pB={{
              x: pB.x,
              y: pB.y,
              z: pB.z,
              visible: pB.visible,
              color: pB.color
            }}
            pC={{
              x: pC.x,
              y: pC.y,
              z: pC.z,
              visible: pC.visible,
              color: pC.color
            }}
          />
        </Suspense>
      </Canvas>
      <Leva />
    </>
  )
}

export default BoxCanvas