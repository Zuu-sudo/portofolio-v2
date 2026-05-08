import React from 'react'
import { useReveal } from '../hooks/useReveal'
import { contactLinks } from '../data/contactLinks'

export default function About({ t }) {
  const revealRef = useReveal()

  return (
    <section id='about' ref={revealRef} className='px-6 py-20 md:px-8'>
      <div className='mx-auto max-w-7xl'>
        <div data-reveal className='mb-12 max-w-3xl opacity-0 [transition:all_.7s_ease]'>
          <p className='mb-3 font-mono text-xs uppercase tracking-[0.45em] text-orange-400'>
            {t.about.label}
          </p>
          <h2 className='mb-4 text-3xl font-black tracking-[-0.06em] text-text-primary md:text-5xl'>
            {t.about.title}
          </h2>
          <p className='text-sm leading-7 text-text-secondary md:text-base'>{t.about.lead}</p>
        </div>

        <div className='grid gap-8 lg:grid-cols-[0.8fr_1.2fr]'>
          <div data-reveal data-delay='0' className='opacity-0 [transition:all_.7s_ease]'>
            <div className='relative overflow-hidden rounded-[2rem] border border-white/10 bg-bg-secondary p-4 shadow-[0_25px_70px_rgba(0,0,0,0.28)]'>
              <div className='absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.16),transparent_44%)]' />
              <div className='relative overflow-hidden rounded-[1.6rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-6'>
                <div className='mb-6 flex items-center justify-between'>
                  <span className='rounded-full border border-orange-400/20 bg-orange-500/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.28em] text-orange-300'>
                    {t.about.cardTitle}
                  </span>
                  <span className='text-xs uppercase tracking-[0.24em] text-text-muted'>01</span>
                </div>
                <div className='mx-auto flex h-72 w-full max-w-[20rem] items-center justify-center rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))]'>
                  <div className='relative flex h-56 w-56 items-center justify-center rounded-full border border-orange-400/20 bg-[radial-gradient(circle,rgba(249,115,22,0.2),rgba(255,255,255,0.02))] text-center shadow-[0_0_40px_rgba(249,115,22,0.12)]'>
                    <div>
                      <p className='text-xs uppercase tracking-[0.35em] text-orange-200'>Ananta</p>
                      <p className='mt-3 text-5xl font-black tracking-[-0.08em] text-text-primary'>AN</p>
                      <p className='mt-3 text-sm text-text-secondary'>AI • Web • Motion</p>
                    </div>
                  </div>
                </div>
                <div className='mt-6 grid gap-3 text-sm text-text-secondary'>
                  <div className='flex items-center justify-between rounded-2xl border border-white/8 bg-black/20 px-4 py-3'>
                    <span>{t.about.location}</span>
                    <span className='text-text-primary'>IDN</span>
                  </div>
                  <div className='flex items-center justify-between rounded-2xl border border-white/8 bg-black/20 px-4 py-3'>
                    <span>{t.about.study}</span>
                    <span className='text-text-primary'>UNESA</span>
                  </div>
                  <div className='flex items-center justify-between rounded-2xl border border-white/8 bg-black/20 px-4 py-3'>
                    <span>{t.about.focus}</span>
                    <span className='text-text-primary'>Focus</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='grid gap-6'>
            <div data-reveal data-delay='100' className='rounded-[2rem] border border-white/10 bg-bg-secondary p-7 opacity-0 [transition:all_.7s_ease]'>
              <p className='text-base leading-8 text-text-secondary'>{t.about.body}</p>
              <p className='mt-5 text-sm uppercase tracking-[0.24em] text-orange-300'>{t.about.years}</p>
            </div>

            <div className='grid gap-6 md:grid-cols-2'>
              <div data-reveal data-delay='200' className='rounded-[2rem] border border-white/10 bg-bg-secondary p-7 opacity-0 [transition:all_.7s_ease]'>
                <p className='mb-5 text-xs uppercase tracking-[0.3em] text-text-muted'>Bio notes</p>
                <div className='space-y-4'>
                  {t.about.bioPoints.map((point, idx) => (
                    <div key={idx} className='flex gap-3'>
                      <span className='mt-2 h-2.5 w-2.5 rounded-full bg-orange-400 shadow-[0_0_10px_rgba(249,115,22,0.75)]' />
                      <p className='text-sm leading-7 text-text-secondary'>{point}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div data-reveal data-delay='300' className='rounded-[2rem] border border-white/10 bg-bg-secondary p-7 opacity-0 [transition:all_.7s_ease]'>
                <p className='mb-5 text-xs uppercase tracking-[0.3em] text-text-muted'>{t.about.contactLabel}</p>
                <div className='space-y-3'>
                  <a href={contactLinks.email} className='flex items-center justify-between rounded-2xl border border-white/8 bg-black/20 px-4 py-4 text-sm text-text-secondary transition hover:border-orange-400/30 hover:text-text-primary'>
                    <span>{t.about.email}</span>
                    <span className='font-mono text-xs uppercase tracking-[0.22em]'>Mail</span>
                  </a>
                  <a href={contactLinks.instagram} target='_blank' rel='noreferrer' className='flex items-center justify-between rounded-2xl border border-white/8 bg-black/20 px-4 py-4 text-sm text-text-secondary transition hover:border-orange-400/30 hover:text-text-primary'>
                    <span>{t.about.instagram}</span>
                    <span className='font-mono text-xs uppercase tracking-[0.22em]'>Social</span>
                  </a>
                </div>
              </div>
            </div>

            <div className='grid gap-4 sm:grid-cols-3'>
              {t.about.stats.map((stat, idx) => (
                <div
                  key={stat.label}
                  data-reveal
                  data-delay={String(400 + idx * 100)}
                  className='rounded-[1.8rem] border border-white/10 bg-bg-secondary p-6 opacity-0 [transition:all_.7s_ease]'
                >
                  <p className='text-4xl font-black tracking-[-0.08em] text-text-primary'>{stat.value}</p>
                  <p className='mt-3 text-sm leading-6 text-text-secondary'>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}