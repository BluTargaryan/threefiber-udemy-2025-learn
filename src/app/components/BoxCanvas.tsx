import React, { useMemo } from 'react'
import { Canvas } from '@react-three/fiber'
import Polyhedron from './Polyhedron'
import { Stats, OrbitControls } from "@react-three/drei";
import { useControls, Leva } from 'leva';
import * as THREE from 'three';

const BoxCanvas = () => {
  // const color = useControls(
  //   {value: 'red',}
  // )  

  const options = useMemo(() => {
    return {
      x: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
      y: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
      z: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
      visible: true,
      color: { value: '#4354b5' },
      date: Date.now()
    }
  }, [])

  const pA = useControls('Polyhedron A', options)
  const pB = useControls('Polyhedron B', options)
  const pC = useControls('Polyhedron C', options)

  const polyhedron = [
    new THREE.BoxGeometry(), 
    new THREE.SphereGeometry(0.785),
    new THREE.DodecahedronGeometry(0.7853)
  ]
  return (
    <>
      <Canvas camera={{ position: [0, 0, 10] }} className='flex-1'>
        <color attach="background" args={['#d0d0d0']} />
          <Polyhedron position={[-3, 0, 0]} name="Polyhedron 1" wireFrame={true} polyhedron={polyhedron} rotation={[pA.x, pA.y, pA.z]} visible={pA.visible} color={pA.color} />
          <Polyhedron position={[0,0, 0]} name="Polyhedron 2" wireFrame={false} polyhedron={polyhedron} rotation={[pB.x, pB.y, pB.z]} visible={pB.visible} color={pB.color} />
          <Polyhedron position={[3,0, 0]} name="Polyhedron 3" wireFrame={false} polyhedron={polyhedron} rotation={[pC.x, pC.y, pC.z]} visible={pB.visible} color={pC.color} />
          <Stats />
          <OrbitControls 
          // enableZoom={false} enablePan={false} 
          // minAzimuthAngle={-Math.PI / 4}
          // maxAzimuthAngle={Math.PI / 4}
          // minPolarAngle={Math.PI / 6}
          // maxPolarAngle={Math.PI - Math.PI / 6}
          />
          <axesHelper args={[5]} />
          <gridHelper />
      </Canvas>
      <Leva />
    </>
  )
}

export default BoxCanvas