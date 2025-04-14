import React from 'react'
import Box from './Box'
import { Canvas } from '@react-three/fiber'

const BoxCanvas = () => {
  return (
    <Canvas camera={{ position: [0, 0, 2] }}>
        <Box position={[0, 0, 0]} name="Box 1" wireFrame={true} />
        <Box position={[1, 0, 0]} name="Box 2" wireFrame={false} />
        <Box position={[0, 1, 0]} name="Box 3" wireFrame={true} />
      </Canvas>
  )
}

export default BoxCanvas