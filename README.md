# React Three Fiber — Learning Lab

A portfolio of interactive 3D demos built with [React Three Fiber](https://docs.pmnd.rs/react-three-fiber), [Three.js](https://threejs.org/), [Next.js 15](https://nextjs.org/), and [Tailwind CSS](https://tailwindcss.com/). Each route isolates a distinct R3F concept or technique.

## Tech Stack

- **Next.js 15** (App Router, Turbopack)
- **React Three Fiber** + **@react-three/drei**
- **Three.js**
- **GSAP** + **ScrollTrigger**
- **Leva** (GUI controls)
- **Tailwind CSS v4**
- **TypeScript**

## Pages / Examples

| Route | Name | What it demonstrates |
|---|---|---|
| `/` | Geometry & Leva Controls | Basic R3F geometry with Leva GUI controls |
| `/lights` | Materials & Textures | PBR materials, lighting, and texture mapping |
| `/gltf` | GLTF Model Loader | Loading and displaying external GLTF/GLB models |
| `/gldiamonds` | GLTF Scene & Shadows | Multi-mesh GLTF scenes with contact shadows |
| `/tools` | Dynamic Model Switching | Runtime GLTF model swapping with suspense |
| `/labelledtools` | 3D HTML Annotations | Overlaying HTML labels on 3D objects with `Html` from drei |
| `/shoe` | Material Color Customization | Per-material color pickers on a Draco-compressed shoe model using Leva |
| `/diamonds` | Camera Lerp & Pointer Rig | Smooth camera lerp driven by pointer position |
| `/wsad` | Keyboard Input Control | Keyboard (WASD) driven camera/object movement |
| `/scroll-interaction` | Scroll-Driven 3D Interaction | GSAP ScrollTrigger animating mesh rotation and camera position on scroll |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to browse the examples via the nav bar at the top.

## Project Notes

- All 3D canvas components are client components (`'use client'`).
- GLTF models are served from `/public` and preloaded with `useGLTF.preload`.
- GSAP ScrollTrigger instances are cleaned up on unmount to avoid stale triggers during Next.js client-side navigation.
- Nav links are data-driven from `src/app/data/pages.json`.
