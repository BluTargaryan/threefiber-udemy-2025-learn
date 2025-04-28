"use client";

import BoxCanvas from "./components/BoxCanvas";
import BoxCanvasV2 from "./components/BoxCanvasV2";
import GLTFCanvas from "./components/GLTFCanvas";
import GLTFCanvasV2 from "./components/GLTFCanvasV2";
export default function Home() {
  return (
    <div className="h-screen w-screen">
      <GLTFCanvasV2 />
    </div>
  );
}
