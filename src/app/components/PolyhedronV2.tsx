import { useRef } from 'react'
import { useControls } from 'leva'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import { Mesh } from 'three'

export default function Polyhedron({name, position, material}: {name: string, position: [number, number, number], material: THREE.Material}) {
  const ref = useRef<Mesh<THREE.BufferGeometry, THREE.MeshBasicMaterial | THREE.MeshNormalMaterial | THREE.MeshPhongMaterial | THREE.MeshStandardMaterial>>(null)

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x += 0.2 * delta 
      ref.current.rotation.y += 0.05 * delta
    }
  })

  useControls(name, {
    wireframe: {
      value: false,
      onChange: (v) => {
        if (ref.current?.material) {
          ref.current.material.wireframe = v
        }
      },
    },
    flatShading: {
      value: true,
      onChange: (v) => {
        if (ref.current?.material instanceof THREE.MeshNormalMaterial 
            || ref.current?.material instanceof THREE.MeshPhongMaterial
            || ref.current?.material instanceof THREE.MeshStandardMaterial
        ) {
          ref.current.material.flatShading = v
          ref.current.material.needsUpdate = true
        }
      },
    },
    color: {
      value: 'lime',
      onChange: (v) => {
        if (ref.current?.material instanceof THREE.MeshBasicMaterial 
            || ref.current?.material instanceof THREE.MeshPhongMaterial
            || ref.current?.material instanceof THREE.MeshStandardMaterial
        ) {
          ref.current.material.color = new THREE.Color(v)
        }
      },
    },
  })

  return (
    <mesh name={name} position={position} material={material} ref={ref}>
      <icosahedronGeometry args={[1, 1]} />
    </mesh>
  )
}