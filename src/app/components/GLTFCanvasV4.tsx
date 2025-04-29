import { Canvas } from '@react-three/fiber'
import {
  useGLTF,
  OrbitControls,
  Environment,
  Stats,
  Html,
} from '@react-three/drei'
import { useControls } from 'leva'
import Models from '../data/models.json'
import AnnotationModel from './AnnotationModel'


export default function App() {
  const { model } = useControls({
    model: {
      value: 'hammer',
      options: Object.keys(Models),
    },
  })

  return (
    <>
      <Canvas camera={{ position: [0, 0, -0.2], near: 0.025 }}>
        <Environment files="/img/workshop_1k.hdr" background />
        <group>
          <AnnotationModel url={Models[model as keyof typeof Models]} />
        </group>
        <OrbitControls autoRotate />
        <Stats />
      </Canvas>
      <span id="info">
        The {model.replace(/([A-Z])/g, ' $1').toLowerCase()} is selected.
      </span>
    </>
  )
}