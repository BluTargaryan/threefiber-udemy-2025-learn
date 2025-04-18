import React, { useRef, useEffect, useState } from 'react'
import { Mesh, MeshBasicMaterial } from 'three'
import { useFrame } from '@react-three/fiber'
const Box = ({position, name, wireFrame}: {position: [number, number, number], name: string, wireFrame: boolean}) => {
  const instanceRef = useRef<Mesh>(new Mesh())
  const materialRef = useRef<MeshBasicMaterial>(new MeshBasicMaterial())
  // useEffect(() => {
  //   console.log(instanceRef)
  // }, [])

  const [hovered, setHovered] = useState(false)
  const [rotate, setRotate] = useState(false)

  useFrame((_,delta:number) => {
    if(rotate) {
      instanceRef.current.rotation.x += delta
      instanceRef.current.rotation.y += delta
    }

  })
  // useFrame((_,delta:number) => {
  //   instanceRef.current.rotation.x += delta
  //   instanceRef.current.rotation.y += delta
  //   instanceRef.current.position.y = Math.sin(state.clock.getElapsedTime())

  // })

   // useFrame(() => {
  //   instanceRef.current.rotation.x += 0.01
  //   instanceRef.current.rotation.y += 0.01

  // })
  return (
    <mesh 
    position={position} 
    name={name} ref={instanceRef}
    scale={hovered ? 1.5 : 1}
    onPointerDown={() => {
      setRotate(!rotate)
    }}
    // onPointerUp={(e) => {
    //   setRotate(false)
    // }}
    onPointerOver={() => {
      setHovered(true)
    }}
    onPointerOut={() => {
      setHovered(false)
    }}
    onUpdate={(e) => {
      console.log(e)
    }}
    >
          <boxGeometry />
          <meshBasicMaterial color={hovered ? 0xff0000 : 0x00ff00} wireframe={wireFrame} ref={materialRef} />
        </mesh>
  )
}

export default Box