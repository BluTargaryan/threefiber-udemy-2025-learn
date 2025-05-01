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
    <div className="h-screen w-screen">
      <BoxKybrdCanvas/>
    </div>
  );
}
