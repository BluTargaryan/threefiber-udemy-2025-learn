import { useRef, useState, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { Mesh, Vector3Tuple } from 'three'

interface BoxProps {
  selected?: boolean
  keyMap: Record<string, boolean>
  position?: Vector3Tuple
}

export default function Box({ selected, keyMap, position }: BoxProps) {
  const ref = useRef<Mesh>(null)
  const [isSelected, setIsSelected] = useState(selected)
  const [isHovered, setIsHovered] = useState(false)

  useFrame((_, delta) => {
    if (!ref.current || !isSelected) return;
    
    if (keyMap['KeyA']) {
      ref.current.position.x -= 1 * delta;
    }
    if (keyMap['KeyD']) {
      ref.current.position.x += 1 * delta;
    }
    if (keyMap['KeyW']) {
      ref.current.position.z -= 1 * delta;
    }
    if (keyMap['KeyS']) {
      ref.current.position.z += 1 * delta;
    }
  })

  useEffect(() => {
    if (isHovered) {
      document.body.style.cursor = 'pointer'
    } else {
      document.body.style.cursor = 'default'
    }
  }, [isHovered])

  return (
    <mesh 
      ref={ref} 
      onPointerDown={() => setIsSelected(!isSelected)} 
      position={position}
      onPointerOver={() => setIsHovered(true)}
      onPointerOut={() => setIsHovered(false)}
    >
      <boxGeometry />
      <meshBasicMaterial color={0x00ff00} wireframe={!isSelected} />
    </mesh>
  )
}