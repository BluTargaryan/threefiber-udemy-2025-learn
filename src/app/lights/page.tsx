"use client";

import BoxCanvasV2 from "../components/BoxCanvasV2";

export default function Lights() {
  return (
    <div className="w-full flex-1 flex flex-col">
      <div className="w-full flex gap-4 items-center justify-center bg-gray-100 text-black p-4">
        Use the Leva (side menu) to control the lights and the polyhedron materials
      </div>
        <BoxCanvasV2/>

    </div>
  );
}
