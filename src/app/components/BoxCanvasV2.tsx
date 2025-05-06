import { Canvas, useLoader } from '@react-three/fiber'
import PolyhedronV2 from './PolyhedronV2'
import * as THREE from 'three'
import { Stats, OrbitControls} from '@react-three/drei'
import Lights from './Lights'
import Floor from './Floor'
export default function App() {
  const texture = useLoader(THREE.TextureLoader, '/grid.png')
  return (
    <Canvas camera={{ position: [-1, 4, 2.5] }} shadows>
      {/* <directionalLight position={[1, 1, 1]} /> */}
      <Lights />
      {/* <PolyhedronV2
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
      /> */}
       <PolyhedronV2
        name="meshBasicMaterialTextured"
        position={[3, 1, 0]}
        material={new THREE.MeshBasicMaterial({ map: texture })}
      />
      <PolyhedronV2
        name="meshPhongMaterialTextured"
        position={[1, 1, 0]}
        material={new THREE.MeshPhongMaterial({
          map: texture,
        })}
      />
      <PolyhedronV2
        name="meshNormalMaterialTextured"
        position={[-1, 1, 0]}
        material={new THREE.MeshNormalMaterial()}
      />
      <PolyhedronV2
        name="meshStandardMaterial"
        position={[-3, 1, 0]}
        material={new THREE.MeshStandardMaterial({
          map: texture,
        })}
      />
      <Floor />
      <OrbitControls target-y={1} />
      <axesHelper args={[5]} />
      <gridHelper />
      <Stats />
    </Canvas>
  )
}