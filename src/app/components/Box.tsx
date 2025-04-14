import React from 'react'

const Box = ({position, name, wireFrame}: {position: [number, number, number], name: string, wireFrame: boolean}) => {
  return (
    <mesh position={position} name={name}>
          <boxGeometry />
          <meshBasicMaterial color={0x00ff00} wireframe={wireFrame} />
        </mesh>
  )
}

export default Box