"use client";

import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const BoxCanvas = dynamic(() => import('./components/BoxCanvas'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      Loading 3D scene...
    </div>
  ),
})

export default function Home() {
  return (
    <div className="w-full flex-1 flex flex-col">
      <div className="w-full flex gap-4 items-center justify-center bg-gray-100 text-black p-4">
        Use the Leva (side menu) to control the polyhedrons
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <BoxCanvas />
      </Suspense>
    </div>
  );
}
