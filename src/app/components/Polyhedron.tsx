import React, { useRef, useEffect, useState } from 'react'
import * as THREE from 'three'

const Polyhedron = ({position, name, wireFrame, polyhedron, rotation, visible, color}: {position: [number, number, number], name: string, wireFrame: boolean, polyhedron: THREE.BufferGeometry[], rotation: [number, number, number], visible: boolean, color: string}) => {
  const [count, setCount] = useState(0)
  
  const instanceRef = useRef<THREE.Mesh>(new THREE.Mesh())
  const materialRef = useRef<THREE.MeshBasicMaterial>(new THREE.MeshBasicMaterial())

  useEffect(() => {
    console.log(instanceRef.current.geometry.uuid)
  }, [])

  const [hovered, setHovered] = useState(false)
  // const [rotate, setRotate] = useState(false)

  // useFrame((_,delta:number) => {
  //     instanceRef.current.rotation.x += delta
  //     instanceRef.current.rotation.y += delta


  // })

  return (
    <mesh 
    position={position} 
    rotation={rotation}
    visible={visible}
    name={name} ref={instanceRef}
    scale={hovered ? 1.5 : 1}
    onPointerDown={() => {
      setCount((count + 1)%3)
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
    geometry={polyhedron[count]}
    >
          <meshBasicMaterial color={hovered ? 0xff0000 : color} wireframe={wireFrame} ref={materialRef} />
          <axesHelper/>
        </mesh>
  )
}

export default Polyhedron