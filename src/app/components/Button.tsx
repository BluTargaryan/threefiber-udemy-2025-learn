import { useRef, useState, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { MathUtils } from 'three'
import { Color, MeshPhysicalMaterial } from 'three'
import { Mesh } from 'three'
import { ThreeElements } from '@react-three/fiber'

const black = new Color('black')

interface ButtonProps extends Omit<ThreeElements['mesh'], 'ref'> {
  onClick?: () => void;
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: number | [number, number, number];
}

export default function Button({ onClick, ...props }: ButtonProps) {
  const ref = useRef<Mesh>(null)
  const [hovered, setHovered] = useState(false)
  const [selected, setSelected] = useState(false)
  const colorTo = useMemo(
    () => new Color(Math.floor(Math.random() * 16777216)),
    []
  )

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.x = hovered
        ? MathUtils.lerp(ref.current.rotation.x, -Math.PI * 2, 0.025)
        : MathUtils.lerp(ref.current.rotation.x, 0, 0.025)

      ref.current.position.z = selected
        ? MathUtils.lerp(ref.current.position.z, 0, 0.025)
        : MathUtils.lerp(ref.current.position.z, -3, 0.025)

      const material = ref.current.material as MeshPhysicalMaterial
      material.color.lerp(selected ? colorTo : black, 0.025)
    }
  })

  return (
    <mesh
      {...props}
      ref={ref}
      onPointerDown={() => {
        setSelected(!selected);
        onClick?.();
      }}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <icosahedronGeometry />
      <meshPhysicalMaterial
        roughness={0}
        metalness={0}
        thickness={3.12}
        ior={1.74}
        transmission={1.0}
      />
    </mesh>
  )
}