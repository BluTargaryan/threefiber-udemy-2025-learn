"use client";


import GLTFCanvasV2 from "../components/GLTFCanvasV2";

export default function GLDiamonds() {
  return (
    <div className="w-full flex-1 flex flex-col">
      <div className="w-full flex gap-4 items-center justify-center bg-gray-100 text-black p-4">
        Use the Leva (side menu) to control the polyhedrons, left mouse to rotate, right mouse to pan, middle mouse to zoom
      </div>
        <GLTFCanvasV2/>

    </div>
  );
}
