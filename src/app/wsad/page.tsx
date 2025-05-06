"use client";

import BoxKybrdCanvas from "../components/BoxKybrdCanvas";
export default function Home() {
  return (
    <div className="w-full flex-1 flex flex-col">
      <div className="w-full flex gap-4 items-center justify-center bg-gray-100 text-black p-4">
        Select box or boxes and use keys WSAD to move it
      </div>
        <BoxKybrdCanvas/>

    </div>
  );
}
