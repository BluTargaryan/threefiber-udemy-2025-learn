import { useState } from "react"
import { useGLTF,Html} from "@react-three/drei"
import { JSX } from "react"

export default function AnnotationModel({ url }: { url: string }) {
    const { scene } = useGLTF(url)
    const [cache, setCache] = useState<Record<string, JSX.Element>>({})
  
    if (!cache[url]) {
      const annotations: JSX.Element[] = []
  
      scene.traverse((o) => {
        if (o.userData.prop) {
          annotations.push(
            <Html
              key={o.uuid}
              position={[o.position.x, o.position.y, o.position.z]}
              distanceFactor={0.25}
            >
              <div className="annotation">{o.userData.prop}</div>
            </Html>
          )
        }
      })
  
      console.log('Caching JSX for url ' + url)
      setCache({
        ...cache,
        [url]: <primitive object={scene}>{annotations}</primitive>,
      })
    }
    return cache[url]
  }