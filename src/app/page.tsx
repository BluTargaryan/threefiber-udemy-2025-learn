"use client";

import BoxCanvas from "./components/BoxCanvas";
import BoxCanvasV2 from "./components/BoxCanvasV2";
import GLTFCanvas from "./components/GLTFCanvas";
import GLTFCanvasV2 from "./components/GLTFCanvasV2";
import GLTFCanvasV3 from "./components/GLTFCanvsV3";
import GLTFCanvasV4 from "./components/GLTFCanvasV4";
import GLTFCanvasV5 from "./components/GLTFCanvasV5";
import LerpCanvas from "./components/LerpCanvas";
import BoxKybrdCanvas from "./components/BoxKybrdCanvas";
export default function Home() {
  return (
    <div className="w-full flex-1 flex flex-col border-2 border-amber-500">
      <div className="w-full flex gap-4 items-center justify-center bg-gray-100 text-black p-4">
        Home
      </div>
        <BoxKybrdCanvas/>

    </div>
  );
}
