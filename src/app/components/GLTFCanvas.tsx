import { Stats, OrbitControls, Circle, Environment } from '@react-three/drei'
import { Canvas, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three-stdlib'

export default function App() {
  const gltf = useLoader(GLTFLoader, './monkey.glb')

  return (
    <Canvas camera={{ position: [-0.5, 1, 2] }} shadows>
         <Environment
        files="./venice_sunset_1k.hdr"
        background
        backgroundBlurriness={0.5}
      />
      <directionalLight
        position={[3.3, 1.0, 4.4]}
        castShadow
        intensity={Math.PI * 2}
      />
      <primitive
        object={gltf.scene}
        position={[0, 1, 0]}
        children-0-castShadow
      />
      <Circle args={[10]} rotation-x={-Math.PI / 2} receiveShadow>
        <meshStandardMaterial />
      </Circle>
      <OrbitControls target={[0, 1, 0]} />
      <axesHelper args={[5]} />
      <Stats />
    </Canvas>
  )
}