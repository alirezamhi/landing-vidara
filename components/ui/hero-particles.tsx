'use client'

import { useEffect, useMemo, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import type { ISourceOptions } from '@tsparticles/engine'
import { loadSlim } from '@tsparticles/slim'

export default function HeroParticles() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => setReady(true))
  }, [])

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: { enable: false },
      background: { color: { value: 'transparent' } },
      fpsLimit: 60,
      detectRetina: true,

      particles: {
        // خیلی مهم: حتما مقدار number را بده، وگرنه ممکن است چیزی نمایش داده نشود
        number: { value: 45, density: { enable: true, area: 900 } }, // :contentReference[oaicite:3]{index=3}
        color: { value: ['#009FD9', '#035370'] },
        opacity: { value: { min: 0.08, max: 0.22 } },
        size: { value: { min: 1, max: 3 } },
        move: { enable: true, speed: 0.6, outModes: { default: 'out' } },
        links: {
          enable: true,
          distance: 140,
          opacity: 0.14,
          width: 1,
          color: '#009FD9',
        },
      },

      interactivity: {
        events: {
          resize: true,
          onHover: { enable: true, mode: 'grab' },
        },
        modes: {
          grab: { distance: 180, links: { opacity: 0.18 } },
        },
      },
    }),
    []
  )

  if (!ready) return null

  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      <Particles id="vidara-hero" options={options} className="h-full w-full" />
    </div>
  )
}
