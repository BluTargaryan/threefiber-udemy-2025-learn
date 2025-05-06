"use client";


import GLTFCanvas from "../components/GLTFCanvas";

export default function GLTF() {
  return (
    <div className="w-full flex-1 flex flex-col">
      <div className="w-full flex gap-4 items-center justify-center bg-gray-100 text-black p-4">
        Use mouse buttons (left, right, middle) to rotate,pan and zoom the model
      </div>
        <GLTFCanvas/>

    </div>
  );
}
