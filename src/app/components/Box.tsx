import React, { useRef, useEffect, useState, useMemo } from 'react'
import * as THREE from 'three'
const Box = ({position, name, wireFrame}: {position: [number, number, number], name: string, wireFrame: boolean}) => {
  const [count, setCount] = useState(0)
  
  const instanceRef = useRef<THREE.Mesh>(new THREE.Mesh())
  const materialRef = useRef<THREE.MeshBasicMaterial>(new THREE.MeshBasicMaterial())
  const geometry  = useMemo(() => [new THREE.BoxGeometry(), new THREE.SphereGeometry(0.785)], [])
  useEffect(() => {
    console.log(instanceRef.current.geometry.uuid)
  }, [])

  const [hovered, setHovered] = useState(false)
  // const [rotate, setRotate] = useState(false)

  // useFrame((_,delta:number) => {
  //   if(rotate) {
  //     instanceRef.current.rotation.x += delta
  //     instanceRef.current.rotation.y += delta
  //   }

  // })
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
      setCount((count + 1)%2)
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
    geometry={geometry[count]}
    >
  {/* <boxGeometry /> */}
          <meshBasicMaterial color={hovered ? 0xff0000 : 0x00ff00} wireframe={wireFrame} ref={materialRef} />
        </mesh>
  )
}

export default Box