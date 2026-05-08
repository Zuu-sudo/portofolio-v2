import React from 'react'
import { useReveal } from '../hooks/useReveal'
import { useTypewriter } from '../hooks/useTypewriter'
import { contactLinks } from '../data/contactLinks'

const socialIcons = {
  instagram: (
    <svg viewBox='0 0 24 24' className='h-5 w-5' fill='none' stroke='currentColor' strokeWidth='1.8'>
      <rect x='3.5' y='3.5' width='17' height='17' rx='5' />
      <circle cx='12' cy='12' r='4' />
      <circle cx='17.4' cy='6.6' r='0.8' fill='currentColor' stroke='none' />
    </svg>
  ),
  email: (
    <svg viewBox='0 0 24 24' className='h-5 w-5' fill='none' stroke='currentColor' strokeWidth='1.8'>
      <path d='M4 6h16v12H4z' />
      <path d='m4 7 8 6 8-6' />
    </svg>
  ),
  github: (
    <svg viewBox='0 0 24 24' className='h-5 w-5' fill='currentColor'>
      <path d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z' />
    </svg>
  ),
}

const socialLinks = [
  { label: 'Instagram', href: contactLinks.instagram, icon: socialIcons.instagram },
  { label: 'Email', href: contactLinks.email, icon: socialIcons.email },
  { label: 'GitHub', href: contactLinks.github, icon: socialIcons.github },
]

export default function Hero({ t }) {
  const revealRef = useReveal()
  const typedRole = useTypewriter(t.hero.roles, 80, 1500)

  return (
    <section id='hero' ref={revealRef} className='relative overflow-hidden px-6 pb-20 pt-32 md:px-8 md:pt-36'>
      <div className='pointer-events-none absolute inset-0'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.08),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_35%)]' />
      </div>

      <div className='relative mx-auto grid max-w-7xl items-end gap-14 lg:grid-cols-[1.2fr_0.8fr]'>
        <div>
          <p data-reveal data-delay='0' className='mb-5 opacity-0 [transition:all_.7s_ease]'>
            <span className='inline-flex rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.35em] text-orange-300'>
              {t.hero.eyebrow}
            </span>
          </p>

          <div data-reveal data-delay='100' className='opacity-0 [transition:all_.7s_ease]'>
            <p className='mb-3 text-sm uppercase tracking-[0.32em] text-text-secondary'>{t.hero.greeting}</p>
            <h1 className='max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.08em] text-text-primary sm:text-6xl md:text-7xl xl:text-[6.2rem]'>
              {t.hero.title}
            </h1>
          </div>

          <div data-reveal data-delay='200' className='mt-6 opacity-0 [transition:all_.7s_ease]'>
            <div className='inline-flex min-h-[3.25rem] items-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-base text-orange-200 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] md:text-lg'>
              <span className='mr-3 h-2.5 w-2.5 rounded-full bg-orange-400 shadow-[0_0_14px_rgba(249,115,22,0.7)]' />
              <span className='font-medium'>{typedRole}</span>
              <span className='ml-1 animate-pulse text-orange-400'>|</span>
            </div>
          </div>

          <p data-reveal data-delay='300' className='mt-6 max-w-2xl text-base leading-8 text-text-secondary opacity-0 [transition:all_.7s_ease] md:text-lg'>
            {t.hero.description}
          </p>

          <div data-reveal data-delay='400' className='mt-8 flex flex-col gap-4 opacity-0 [transition:all_.7s_ease] sm:flex-row'>
            <a
              href='#projects'
              className='inline-flex items-center justify-center rounded-full bg-orange-500 px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-black transition hover:bg-orange-400'
            >
              {t.hero.primaryCta}
            </a>
            <a
              href='#contact'
              className='inline-flex items-center justify-center rounded-full border border-white/12 bg-white/5 px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-text-primary transition hover:border-orange-400/30 hover:bg-white/8'
            >
              {t.hero.secondaryCta}
            </a>
          </div>

          <div data-reveal data-delay='500' className='mt-10 flex flex-col gap-5 opacity-0 [transition:all_.7s_ease] md:flex-row md:items-center md:justify-between'>
            <div>
              <p className='mb-3 text-xs uppercase tracking-[0.32em] text-text-muted'>{t.hero.socialLabel}</p>
              <div className='flex gap-3'>
                {socialLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                    className='flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-text-secondary transition hover:border-orange-400/40 hover:text-orange-300'
                    aria-label={item.label}
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
            <p className='max-w-sm text-sm leading-7 text-text-muted'>{t.hero.availability}</p>
          </div>
        </div>

        <div data-reveal data-delay='200' className='opacity-0 [transition:all_.8s_ease]'>
          <div className='relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl'>
            <div className='absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.18),transparent_40%)]' />
            <div className='relative space-y-5'>
              <div className='flex items-center justify-between border-b border-white/8 pb-4'>
                <div>
                  <p className='font-mono text-[11px] uppercase tracking-[0.32em] text-orange-300'>System Snapshot</p>
                  <h3 className='mt-2 text-2xl font-bold tracking-[-0.05em] text-text-primary'>Portfolio Core</h3>
                </div>
                <div className='rounded-full border border-orange-400/20 bg-orange-500/10 px-3 py-1 text-xs uppercase tracking-[0.24em] text-orange-200'>
                  Live
                </div>
              </div>

              <div className='grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3'>
                {t.hero.stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className={`rounded-[1.4rem] border border-white/8 bg-black/20 p-4 ${index === 1 ? 'sm:translate-y-5 xl:translate-y-5' : ''}`}
                  >
                    <p className='text-3xl font-black tracking-[-0.08em] text-text-primary'>{stat.value}</p>
                    <p className='mt-2 text-sm leading-6 text-text-secondary'>{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className='rounded-[1.6rem] border border-white/8 bg-black/25 p-5'>
                <div className='mb-4 flex items-center justify-between'>
                  <p className='text-sm font-semibold uppercase tracking-[0.24em] text-text-secondary'>Core Signals</p>
                  <span className='h-2 w-2 rounded-full bg-orange-400 shadow-[0_0_12px_rgba(249,115,22,0.85)]' />
                </div>
                <div className='space-y-4'>
                  {[
                    { label: 'UI rhythm', value: 92 },
                    { label: 'Motion', value: 86 },
                    { label: 'Structure', value: 90 },
                  ].map((item, idx) => (
                    <div key={item.label}>
                      <div className='mb-2 flex items-center justify-between text-xs uppercase tracking-[0.24em] text-text-muted'>
                        <span>{item.label}</span>
                        <span>{item.value}%</span>
                      </div>
                      <div className='h-2 overflow-hidden rounded-full bg-white/8'>
                        <div
                          className='h-full rounded-full bg-[linear-gradient(90deg,#F97316,#FDBA74)] animate-[scaleIn_.9s_ease_forwards] origin-left'
                          style={{ width: `${item.value}%`, animationDelay: `${idx * 120}ms` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}