import React, { useEffect, useRef, useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import { toolsData } from '../data/toolsData'

export default function Tools({ t }) {
  const revealRef = useReveal()
  const sectionRef = useRef(null)
  const [activeBars, setActiveBars] = useState(false)

  useEffect(() => {
    if (!sectionRef.current) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveBars(true)
            observer.disconnect()
          }
        })
      },
      { threshold: 0.2 }
    )

    observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id='tools' ref={revealRef} className='px-6 py-20 md:px-8'>
      <div ref={sectionRef} className='mx-auto max-w-7xl'>
        <div data-reveal className='mb-12 max-w-3xl mx-auto text-center opacity-0 [transition:all_.7s_ease]'>
          <p className='mb-3 font-mono text-xs uppercase tracking-[0.45em] text-orange-400'>
            {t.tools.label}
          </p>
          <h2 className='mb-4 text-3xl font-black tracking-[-0.06em] text-text-primary md:text-5xl'>
            {t.tools.title}
          </h2>
          <p className='text-sm leading-7 text-text-secondary md:text-base'>{t.tools.description}</p>
        </div>

        <div className='grid gap-5 md:grid-cols-2 xl:grid-cols-4'>
          {toolsData.map((tool, idx) => {
            const IconComponent = tool.icon
            return (
              <div
                key={tool.name}
                data-reveal
                data-delay={String(idx * 90)}
                className='group rounded-[2rem] border border-white/10 bg-bg-secondary p-6 opacity-0 [transition:all_.7s_ease] hover:border-orange-400/25'
              >
                <div className='mb-6 flex items-start justify-between'>
                  <div className={`flex h-16 w-16 items-center justify-center rounded-[1.4rem] bg-gradient-to-br ${tool.accent} text-2xl text-black shadow-[0_16px_40px_rgba(249,115,22,0.15)]`}>
                    <IconComponent className='h-8 w-8' />
                  </div>
                  <span className='rounded-full border border-white/8 bg-black/20 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.24em] text-text-muted'>
                    {tool.level}%
                  </span>
                </div>
                <h3 className='text-xl font-bold tracking-[-0.04em] text-text-primary'>{tool.name}</h3>
                <p className='mt-2 text-xs uppercase tracking-[0.24em] text-text-muted'>{t.tools.proficiency}</p>
                <div className='mt-5 h-2 overflow-hidden rounded-full bg-white/8'>
                  <div
                    className='skill-bar'
                    style={{ '--skill-level': `${tool.level}%` }}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}