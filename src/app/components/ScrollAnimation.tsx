'use client'

import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import type { RefObject } from 'react'
import type { Camera, DirectionalLight, Mesh } from 'three'

gsap.registerPlugin(ScrollTrigger)

type ScrollAnimationProps = {
  meshRef: RefObject<Mesh | null>
  cameraRef: RefObject<Camera | null>
  lightRef?: RefObject<DirectionalLight | null>
}

export default function ScrollAnimation({
  meshRef,
  cameraRef,
  lightRef,
}: ScrollAnimationProps) {
  useEffect(() => {
    const mesh = meshRef.current
    const camera = cameraRef.current
    const light = lightRef?.current

    if (!mesh || !camera) return

    const triggerConfig = {
      trigger: '#scroll-container',
      start: 'top top',
      end: 'bottom bottom',
      scrub: true,
    }

    const rotationTween = gsap.to(mesh.rotation, {
      y: Math.PI * 2,
      ease: 'none',
      scrollTrigger: triggerConfig,
    })

    const cameraTween = gsap.to(camera.position, {
      z: 2,
      ease: 'none',
      scrollTrigger: triggerConfig,
    })

    const lightTween =
      light &&
      gsap.to(light, {
        intensity: 2,
        ease: 'none',
        scrollTrigger: triggerConfig,
      })

    return () => {
      rotationTween.scrollTrigger?.kill()
      rotationTween.kill()
      cameraTween.scrollTrigger?.kill()
      cameraTween.kill()
      lightTween?.scrollTrigger?.kill()
      lightTween?.kill()
    }
  }, [meshRef, cameraRef, lightRef])

  return null
}
