import React from 'react'
import { useReveal } from '../hooks/useReveal'

export default function Experience({ t }) {
  const revealRef = useReveal()

  return (
    <section id='experience' ref={revealRef} className='px-6 py-20 md:px-8'>
      <div className='mx-auto max-w-7xl'>
        <div data-reveal className='mb-12 max-w-3xl opacity-0 [transition:all_.7s_ease]'>
          <p className='mb-3 font-mono text-xs uppercase tracking-[0.45em] text-orange-400'>
            {t.experience.label}
          </p>
          <h2 className='mb-4 text-3xl font-black tracking-[-0.06em] text-text-primary md:text-5xl'>
            {t.experience.title}
          </h2>
          <p className='text-sm leading-7 text-text-secondary md:text-base'>{t.experience.description}</p>
        </div>

        <div className='relative mx-auto max-w-5xl'>
          <div className='absolute left-4 top-0 h-full w-px bg-gradient-to-b from-orange-400/60 via-white/10 to-transparent md:left-1/2' />
          <div className='space-y-8'>
            {t.experience.items.map((item, idx) => (
              <div
                key={`${item.year}-${item.title}`}
                data-reveal
                data-delay={String(idx * 140)}
                className={`relative grid gap-4 opacity-0 [transition:all_.8s_ease] md:grid-cols-2 ${idx % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''}`}
              >
                <div className={`md:px-10 ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className='rounded-[2rem] border border-white/10 bg-bg-secondary p-6 shadow-[0_20px_60px_rgba(0,0,0,0.2)]'>
                    <p className='mb-3 font-mono text-xs uppercase tracking-[0.3em] text-orange-300'>{item.year}</p>
                    <h3 className='text-2xl font-bold tracking-[-0.05em] text-text-primary'>{item.title}</h3>
                    <p className='mt-3 text-sm leading-7 text-text-secondary'>{item.description}</p>
                  </div>
                </div>
                <div className='hidden md:block' />
                <span className='absolute left-4 top-8 z-10 h-3.5 w-3.5 -translate-x-1/2 rounded-full border border-orange-200/40 bg-orange-400 shadow-[0_0_16px_rgba(249,115,22,0.8)] md:left-1/2' />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}