import type { Metadata } from 'next'
import ScrollInteractionCanvas from '../components/ScrollInteractionCanvas'

export const metadata: Metadata = {
  title: 'Scroll-Driven 3D Interaction',
  description:
    'This example demonstrates a scroll-driven 3D interaction using React Three Fiber and GSAP ScrollTrigger. The scene responds to user scroll by animating camera movement and object rotation, simulating a narrative progression used in interactive campaigns.',
}

export default function ScrollInteractionPage() {
  return (
    <main className="w-full flex-1 bg-gradient-to-b from-neutral-950 to-neutral-900 text-neutral-100">
      <section className="w-full border-b border-neutral-800/80 px-6 py-5 text-center">
        <h1 className="text-xl font-semibold sm:text-2xl">
          Scroll-Driven 3D Interaction
        </h1>
        <p className="mx-auto mt-2 max-w-3xl text-sm text-neutral-300 sm:text-base">
          This example demonstrates a scroll-driven 3D interaction using React
          Three Fiber and GSAP ScrollTrigger. The scene responds to user scroll
          by animating camera movement and object rotation, simulating a
          narrative progression used in interactive campaigns.
        </p>
      </section>

      <section id="scroll-container" className="relative h-[200vh] w-full">
        <div className="sticky top-0 h-screen w-full">
          <ScrollInteractionCanvas />
          <div className="pointer-events-none absolute inset-x-0 bottom-6 text-center text-xs text-neutral-300 sm:text-sm">
            Scroll to drive the scene
          </div>
        </div>
      </section>
    </main>
  )
}
