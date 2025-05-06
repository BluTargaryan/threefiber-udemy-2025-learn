"use client";


import LerpCanvas from "../components/LerpCanvas";

export default function Home() {
  return (
    <div className="w-full flex-1 flex flex-col">
      <div className="w-full flex gap-4 items-center justify-center bg-gray-100 text-black p-4">
        Use mouse to select the diamonds
      </div>
        <LerpCanvas/>

    </div>
  );
}
