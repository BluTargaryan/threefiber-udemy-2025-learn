import React from 'react'
import Box from './Box'
import { Canvas } from '@react-three/fiber'
import Polyhedron from './Polyhedron'
const BoxCanvas = () => {
  return (
    <Canvas camera={{ position: [0, 0, 2] }}>
        <Polyhedron position={[1, 0, 0]} name="Polyhedron 1" wireFrame={true} />
        <Polyhedron position={[0,0, 0]} name="Polyhedron 1" wireFrame={false} />
        <Polyhedron position={[-1, 0, 0]} name="Polyhedron 1" wireFrame={true} />
      </Canvas>
  )
}

export default BoxCanvas