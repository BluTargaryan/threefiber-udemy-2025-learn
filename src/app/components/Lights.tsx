import { useRef, useMemo } from "react"
import { useControls } from "leva"
import * as THREE from "three"
import { AmbientLight, DirectionalLight, PointLight, SpotLight } from "three"

export default function Lights() {
    const ambientRef = useRef<AmbientLight>(null)
    const directionalRef = useRef<DirectionalLight>(null)
    const pointRef = useRef<PointLight>(null)
    const spotRef = useRef<SpotLight>(null)

    const ambientControls = useMemo(() => ({
      visible: {
        value: false,
        onChange: (v: boolean) => {
            if (ambientRef.current) {
                ambientRef.current.visible = v
            }
        },
      },
      color: {
        value: 'white',
        onChange: (v: string) => {
            if (ambientRef.current) {
                ambientRef.current.color = new THREE.Color(v)
            }
        },
      },
    }), [])

    const directionalControls = useMemo(() => ({
      visible: {
        value: true,
        onChange: (v: boolean) => {
          if (directionalRef.current) {
            directionalRef.current.visible = v
          }
        },
      },
      position: {
        value: { x: 1, y: 1, z: 1 },
        onChange: (v: THREE.Vector3) => {
          if (directionalRef.current) {
            directionalRef.current.position.copy(v)
          }
        },
      },
      color: {
        value: 'white',
        onChange: (v: string) => {
          if (directionalRef.current) {
            directionalRef.current.color = new THREE.Color(v)
          }
        },
      },
    }), [])

    const pointControls = useMemo(() => ({
      visible: {
        value: false,
        onChange: (v: boolean) => {
          if (pointRef.current) {
            pointRef.current.visible = v
          }
        },
      },
      position: {
        value: { x: 2, y: 0, z: 0 },
        onChange: (v: THREE.Vector3) => {
          if (pointRef.current) {
            pointRef.current.position.copy(v)
          }
        },
      },
      color: {
        value: 'white',
        onChange: (v: string) => {
          if (pointRef.current) {
            pointRef.current.color = new THREE.Color(v)
          }
        },
      },
    }), [])

    const spotControls = useMemo(() => ({
      visible: {
        value: false,
        onChange: (v: boolean) => {
          if (spotRef.current) {
            spotRef.current.visible = v
          }
        },
      },
      position: {
        value: { x: 3, y: 2.5, z: 1 },
        onChange: (v: THREE.Vector3) => {
          if (spotRef.current) {
            spotRef.current.position.copy(v)
          }
        },
      },
      color: {
        value: 'white',
        onChange: (v: string) => {
          if (spotRef.current) {
            spotRef.current.color = new THREE.Color(v)
          }
        },
      },
    }), [])

    useControls('Ambient Light', ambientControls)
    useControls('Directional Light', directionalControls)
    useControls('Point Light', pointControls)
    useControls('Spot Light', spotControls)
  
    return (
      <>
        <ambientLight ref={ambientRef} />
        <directionalLight ref={directionalRef} />
        <pointLight ref={pointRef} />
        <spotLight ref={spotRef} />
      </>
    )
  }