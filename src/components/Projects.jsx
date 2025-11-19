import React, { useState } from 'react'
import { GlassCard, Tag, SecondaryButton, PrimaryButton } from './GlassUI'
import { ExternalLink, Github } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const projects = [
  {
    title: 'Auction Pro',
    highlight: 'Real-time bidding platform with websocket-driven updates.',
    tags: ['React','Node','WebSockets','Redis'],
  },
  {
    title: 'ERP SAAS',
    highlight: '50% API performance improvement via caching & indexing.',
    tags: ['Next.js','Express','MongoDB','Redis'],
  },
  {
    title: 'Client Leads Pro',
    highlight: 'Lead efficiency increased by 40% with scoring & automation.',
    tags: ['React','Node','MongoDB'],
  },
  {
    title: 'Keep Notes',
    highlight: 'Offline-first note app using IndexedDB & service workers.',
    tags: ['React','IndexedDB','PWA'],
  },
  {
    title: 'Web Builder Pro',
    highlight: 'Drag & drop editor handling 1K concurrent users.',
    tags: ['React','WebSockets','Node'],
  },
]

export default function Projects(){
  const [active, setActive] = useState(null)

  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Selected Projects</h2>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]"><div className="grid gap-6">
        {projects.map((p, i)=> (
          <GlassCard key={p.title} className="break-inside-avoid p-6 hover:translate-y-[-2px] transition-transform">
            <div className="h-40 rounded-xl bg-white/10 border border-white/10 mb-4" />
            <h3 className="text-xl font-semibold text-white">{p.title}</h3>
            <p className="text-slate-300/90 mt-2">{p.highlight}</p>
            <div className="mt-3 flex flex-wrap gap-2">{p.tags.map(t=> <Tag key={t}>{t}</Tag>)}</div>
            <div className="mt-5 flex gap-3">
              <PrimaryButton onClick={()=> setActive({ ...p })}>Open Project</PrimaryButton>
              <SecondaryButton><ExternalLink size={16}/> Live</SecondaryButton>
            </div>
          </GlassCard>
        ))}
      </div></div>

      <AnimatePresence>
        {active && (
          <ProjectModal project={active} onClose={()=> setActive(null)} />
        )}
      </AnimatePresence>
    </section>
  )
}

function ProjectModal({ project, onClose }){
  return (
    <motion.div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      <motion.div
        initial={{ rotateX: -6, rotateY: 6, opacity: 0, scale: 0.96 }}
        animate={{ rotateX: 0, rotateY: 0, opacity: 1, scale: 1 }}
        exit={{ rotateX: 6, rotateY: -6, opacity: 0, scale: 0.96 }}
        transition={{ type: 'spring', stiffness: 140, damping: 16 }}
        className="relative max-w-3xl w-full"
      >
        <GlassCard className="p-6 md:p-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="h-44 rounded-xl bg-white/10 border border-white/10" />
              <div className="h-24 rounded-xl bg-white/10 border border-white/10" />
              <div className="h-16 rounded-xl bg-white/10 border border-white/10" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">{project.title}</h3>
              <p className="text-slate-300/90 mt-2">{project.highlight}</p>
              <div className="mt-3 flex flex-wrap gap-2">{project.tags.map(t=> <Tag key={t}>{t}</Tag>)}</div>

              <div className="mt-6 space-y-2 text-slate-200/90">
                <InfoRow label="Problem" text="Describe the core problem this solved for users and business." />
                <InfoRow label="Solution" text="Outline the architecture, key features, and technical approaches." />
                <InfoRow label="Impact" text="Share measurable results like latency, conversion, or retention." />
              </div>

              <div className="mt-6 flex gap-3">
                <PrimaryButton><ExternalLink size={16}/> Live Demo</PrimaryButton>
                <SecondaryButton><Github size={16}/> GitHub</SecondaryButton>
              </div>
            </div>
          </div>
        </GlassCard>
      </motion.div>
    </motion.div>
  )
}

function InfoRow({ label, text }){
  return (
    <div>
      <p className="text-xs uppercase tracking-widest text-teal-200/70">{label}</p>
      <p className="text-sm text-slate-200/90">{text}</p>
    </div>
  )
}
