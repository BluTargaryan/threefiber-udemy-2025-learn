"use client";


import GLTFCanvasV3 from "../components/GLTFCanvsV3";

export default function Tools() {
  return (
    <div className="w-full flex-1 flex flex-col">
      <div className="w-full flex gap-4 items-center justify-center bg-gray-100 text-black p-4">
        Use the Leva (side menu) to switch the tools
      </div>
        <GLTFCanvasV3/>

    </div>
  );
}
