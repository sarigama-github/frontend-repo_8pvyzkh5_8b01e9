import React from 'react'
import { GlassCard } from './GlassUI'

const items = [
  {
    company: 'Gnxtace Technology',
    role: 'Full Stack Developer',
    period: '2024–Present',
    bullets: [
      'Built real-time dashboards with websockets',
      'Optimized API latency by 50% via caching & indexes',
      'Led performance reviews across frontend builds'
    ]
  },
  {
    company: 'Jnana Inventive',
    role: 'Full Stack Developer',
    period: '2022–2024',
    bullets: [
      'Shipped offline-first apps using IndexedDB',
      'Implemented CI/CD with zero-downtime releases',
      'Improved engagement by 35% through UX iterations'
    ]
  }
]

export default function Timeline(){
  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">Experience</h2>

      <div className="relative">
        <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-teal-300/40 via-white/20 to-amber-200/40"/>
        <div className="space-y-10">
          {items.map((item, idx)=> (
            <div key={item.company} className="relative md:grid md:grid-cols-2 gap-10 items-stretch">
              <div className={`md:col-start-${idx%2===0?1:2}`}>
                <GlassCard className="p-6">
                  <p className="text-teal-200/80 text-sm">{item.period}</p>
                  <h3 className="text-xl font-semibold text-white">{item.company}</h3>
                  <p className="text-slate-300/90">{item.role}</p>
                  <ul className="mt-3 space-y-2 list-disc list-inside text-slate-200/90">
                    {item.bullets.map(b=> <li key={b}>{b}</li>)}
                  </ul>
                </GlassCard>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
