import { useEffect, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useControls } from 'leva'
import { Color, Mesh,  MeshStandardMaterial } from 'three'
import { ThreeEvent } from '@react-three/fiber'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    shoe: Mesh
    shoe_1: Mesh
    shoe_2: Mesh
    shoe_3: Mesh
    shoe_4: Mesh
    shoe_5: Mesh
    shoe_6: Mesh
    shoe_7: Mesh
  }
  materials: {
    laces: MeshStandardMaterial
    mesh: MeshStandardMaterial
    caps: MeshStandardMaterial
    inner: MeshStandardMaterial
    sole: MeshStandardMaterial
    stripes: MeshStandardMaterial
    band: MeshStandardMaterial
    patch: MeshStandardMaterial
  }
}

export function Model() {
  const [hovered, setHovered] = useState(false)
  const { nodes, materials } = useGLTF('/shoe-draco.glb') as unknown as GLTFResult

  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto'
  }, [hovered])

  useControls('Shoe', () => {
    console.log('creating color pickers')
    
    // using forEach
    // const colorPickers = {}
    // Object.keys(materials).forEach((m) => {
    //   colorPickers[m] = {
    //     value: '#' + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, '0'),
    //     onChange: (v) => {
    //       materials[m].color = new Color(v)
    //     }
    //   }
    // })
    // return colorPickers

    return Object.keys(materials).reduce(
      (acc, m) =>
        Object.assign(acc, {
          [m]: {
            value:
              '#' +
              ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, '0'),
            onChange: (v: string) => {
              (materials[m as keyof typeof materials] as MeshStandardMaterial).color = new Color(v)
            },
          },
        }),
      {}
    )
  })

  // JSX of glTF created using the command
  // npx gltfjsx .\public\models\shoe-draco.glb

  return (
    <group
      dispose={null}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={(e: ThreeEvent<MouseEvent>) => {
        e.stopPropagation()
        const mesh = e.object as Mesh
        const material = mesh.material as MeshStandardMaterial
        const element = document.getElementById('Shoe.' + material.name)
        if (element) element.focus()
      }}
    >
      <mesh geometry={nodes.shoe.geometry} material={materials.laces} />
      <mesh geometry={nodes.shoe_1.geometry} material={materials.mesh} />
      <mesh geometry={nodes.shoe_2.geometry} material={materials.caps} />
      <mesh geometry={nodes.shoe_3.geometry} material={materials.inner} />
      <mesh geometry={nodes.shoe_4.geometry} material={materials.sole} />
      <mesh geometry={nodes.shoe_5.geometry} material={materials.stripes} />
      <mesh geometry={nodes.shoe_6.geometry} material={materials.band} />
      <mesh geometry={nodes.shoe_7.geometry} material={materials.patch} />
    </group>
  )
}

useGLTF.preload('./shoe-draco.glb')  