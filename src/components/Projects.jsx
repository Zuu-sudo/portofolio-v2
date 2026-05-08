import React from 'react'
import { useReveal } from '../hooks/useReveal'

export default function Projects({ t }) {
  const revealRef = useReveal()

  return (
    <section id='projects' ref={revealRef} className='px-6 py-20 md:px-8'>
      <div className='mx-auto max-w-7xl'>
        <div data-reveal className='mb-12 max-w-3xl opacity-0 [transition:all_.7s_ease]'>
          <p className='mb-3 font-mono text-xs uppercase tracking-[0.45em] text-orange-400'>
            {t.projects.label}
          </p>
          <h2 className='mb-4 text-3xl font-black tracking-[-0.06em] text-text-primary md:text-5xl'>
            {t.projects.title}
          </h2>
          <p className='text-sm leading-7 text-text-secondary md:text-base'>{t.projects.description}</p>
        </div>

        <div className='grid gap-6 xl:grid-cols-2'>
          {t.projects.items.map((project, idx) => (
            <article
              key={project.title}
              data-reveal
              data-delay={String(idx * 140)}
              className='group relative overflow-hidden rounded-[2.2rem] border border-white/10 bg-bg-secondary p-7 opacity-0 [transition:all_.8s_ease]'
            >
              <div className={`absolute inset-0 ${project.accent === 'forge' ? 'bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.16),transparent_40%)]' : 'bg-[radial-gradient(circle_at_bottom_right,rgba(253,186,116,0.12),transparent_40%)]'}`} />
              <div className='relative'>
                <div className='mb-8 flex items-start justify-between gap-4'>
                  <div>
                    <p className='mb-3 font-mono text-[11px] uppercase tracking-[0.34em] text-orange-300'>
                      {t.projects.featured}
                    </p>
                    <h3 className='text-3xl font-black tracking-[-0.06em] text-text-primary'>{project.title}</h3>
                  </div>
                  <div className='rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.24em] text-text-muted'>
                    0{idx + 1}
                  </div>
                </div>

                <div className='mb-8 rounded-[1.8rem] border border-white/8 bg-black/25 p-6'>
                  <p className='text-base leading-8 text-text-secondary'>{project.summary}</p>
                  <p className='mt-4 text-sm leading-7 text-text-muted'>{project.details}</p>
                </div>

                <div className='mb-8 flex flex-wrap gap-3'>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className='rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.22em] text-text-secondary'
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.demo}
                  target={project.demo.startsWith('http') ? '_blank' : undefined}
                  rel={project.demo.startsWith('http') ? 'noreferrer' : undefined}
                  className='inline-flex items-center gap-3 rounded-full bg-orange-500 px-6 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-black transition hover:bg-orange-400'
                >
                  <span>{t.projects.demo}</span>
                  <svg viewBox='0 0 24 24' className='h-4 w-4' fill='none' stroke='currentColor' strokeWidth='2'>
                    <path d='M7 17 17 7' />
                    <path d='M8 7h9v9' />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}