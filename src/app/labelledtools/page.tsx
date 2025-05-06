"use client";


import GLTFCanvasV4 from "../components/GLTFCanvasV4";

export default function Home() {
  return (
    <div className="w-full flex-1 flex flex-col">
      <div className="w-full flex gap-4 items-center justify-center bg-gray-100 text-black p-4">
        Use the Leva (side menu) to switch the tools
      </div>
        <GLTFCanvasV4/>

    </div>
  );
}
