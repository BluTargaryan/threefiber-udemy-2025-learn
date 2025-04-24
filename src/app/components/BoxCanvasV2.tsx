import { Canvas } from '@react-three/fiber'
import PolyhedronV2 from './PolyhedronV2'
import * as THREE from 'three'
import { Stats, OrbitControls, Polyhedron } from '@react-three/drei'
import Lights from './Lights'
export default function App() {
  return (
    <Canvas camera={{ position: [-1, 4, 2.5] }}>
      {/* <directionalLight position={[1, 1, 1]} /> */}
      <Lights />
      <PolyhedronV2
        name="meshBasicMaterial"
        position={[-3, 1, 0]}
        material={new THREE.MeshBasicMaterial()}
      />
      <PolyhedronV2
        name="meshNormalMaterial"
        position={[-1, 1, 0]}
        material={new THREE.MeshNormalMaterial()}
      />
      <PolyhedronV2
        name="meshPhongMaterial"
        position={[1, 1, 0]}
        material={new THREE.MeshPhongMaterial()}
      />
      <PolyhedronV2
        name="meshStandardMaterial"
        position={[3, 1, 0]}
        material={new THREE.MeshStandardMaterial()}
      />
      <OrbitControls target-y={1} />
      <axesHelper args={[5]} />
      <gridHelper />
      <Stats />
    </Canvas>
  )
}