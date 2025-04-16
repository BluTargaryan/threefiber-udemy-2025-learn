import React, { useRef, useEffect } from 'react'
import { Mesh, MeshBasicMaterial } from 'three'
import { useFrame } from '@react-three/fiber'
const Box = ({position, name, wireFrame}: {position: [number, number, number], name: string, wireFrame: boolean}) => {
  const instanceRef = useRef<Mesh>(new Mesh())
  const materialRef = useRef<MeshBasicMaterial>(new MeshBasicMaterial())
  // useEffect(() => {
  //   console.log(instanceRef)
  // }, [])

  useFrame((_,delta:number) => {
    instanceRef.current.rotation.x += delta
    instanceRef.current.rotation.y += delta

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
    <mesh position={position} name={name} ref={instanceRef}>
          <boxGeometry />
          <meshBasicMaterial color={0x00ff00} wireframe={wireFrame} ref={materialRef} />
        </mesh>
  )
}

export default Box