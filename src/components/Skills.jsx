import React from 'react'
import { GlassCard, Tag } from './GlassUI'

const skills = {
  Frontend: ['React','Next.js','Redux','Tailwind'],
  Backend: ['Node.js','Express.js','MongoDB','MySQL'],
  Cloud: ['AWS EC2','S3','Cloudflare'],
  Tools: ['Git','Webpack','CI/CD','IndexedDB','WebSockets']
}

export default function Skills(){
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Skills</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {Object.entries(skills).map(([cat, items])=> (
          <GlassCard key={cat} className="p-6">
            <h3 className="text-lg font-semibold text-white mb-3">{cat}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map(s => <Tag key={s}>{s}</Tag>)}
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  )
}
