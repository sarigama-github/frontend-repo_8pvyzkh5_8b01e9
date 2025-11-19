import React from 'react'
import { GlassCard, PrimaryButton, SecondaryButton, Tag } from './GlassUI'
import { MapPin, Mail, Phone, Download, Eye } from 'lucide-react'

export default function Hero({ onViewProjects }) {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(600px_300px_at_20%_-10%,rgba(45,212,191,0.25),transparent_60%),radial-gradient(700px_300px_at_120%_10%,rgba(248,212,155,0.18),transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-6 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="uppercase tracking-[0.35em] text-teal-200/70 text-xs mb-5">Portfolio</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              Saravanan Ramesh — <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-amber-200">Frontend-Focused Full Stack Developer</span>
            </h1>
            <p className="text-slate-300/90 mt-6 text-lg leading-relaxed max-w-xl">
              3+ years experience in React, Next.js, Node.js. Specialized in offline-first apps, real-time systems, and performance optimization.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {['React','Next.js','Node.js','IndexedDB','WebSockets','MongoDB'].map(s => (
                <Tag key={s}>{s}</Tag>
              ))}
            </div>

            <div className="mt-10 flex gap-3">
              <PrimaryButton onClick={onViewProjects}><Eye size={18}/> View Projects</PrimaryButton>
              <SecondaryButton><Download size={18}/> Download Resume</SecondaryButton>
            </div>
          </div>

          <GlassCard className="p-6 md:p-8">
            <div className="flex items-center gap-6">
              <div className="w-24 h-24 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md overflow-hidden shadow-inner" />
              <div>
                <h3 className="text-xl font-semibold text-white">Saravanan Ramesh</h3>
                <p className="text-slate-300/90">Frontend-Focused Full Stack (MERN)</p>
                <div className="mt-4 space-y-2 text-slate-200/80">
                  <div className="flex items-center gap-2"><MapPin size={16} className="text-teal-300"/> Chennai</div>
                  <div className="flex items-center gap-2"><Mail size={16} className="text-teal-300"/> saravanan@example.com</div>
                  <div className="flex items-center gap-2"><Phone size={16} className="text-teal-300"/> +91 98765 43210</div>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  )
}
