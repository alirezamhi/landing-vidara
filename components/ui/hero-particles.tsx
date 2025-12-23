'use client'

import { useEffect, useMemo, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import type { IOptions, RecursivePartial } from "@tsparticles/engine";
import { loadSlim } from '@tsparticles/slim'

export default function HeroParticles() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => setReady(true))
  }, [])
  const options: RecursivePartial<IOptions> = useMemo(
    () => ({
      fullScreen: { enable: false },
      background: { color: { value: "transparent" } },
      fpsLimit: 60,
      detectRetina: true,
      interactivity: {
        events: {
          onHover: { enable: true, mode: "repulse" },
          onClick: { enable: true, mode: "push" },
          // اینجا مهم است:
          resize: { enable: true },
        },
        modes: {
          repulse: { distance: 100, duration: 0.4 },
          push: { quantity: 2 },
        },
      },
      particles: {
        number: { value: 40, density: { enable: true, area: 800 } },
        color: { value: ["#ffffff"] },
        opacity: { value: 0.2 },
        size: { value: { min: 1, max: 3 } },
        move: { enable: true, speed: 1, direction: "none", outModes: { default: "out" } },
        links: { enable: true, distance: 120, opacity: 0.15 },
      },
    }),
    []
  );


  if (!ready) return null

  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      <Particles id="vidara-hero" options={options} className="h-full w-full" />
    </div>
  )
}
