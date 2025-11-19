import React from 'react'
import { GlassCard, PrimaryButton } from './GlassUI'
import { Github, Linkedin } from 'lucide-react'

export default function Contact(){
  return (
    <section className="max-w-3xl mx-auto px-6 py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Get in touch</h2>
      <GlassCard className="p-6 md:p-8">
        <form className="grid gap-4">
          <div className="grid md:grid-cols-2 gap-4">
            <Input placeholder="Your name"/>
            <Input placeholder="Email" type="email"/>
          </div>
          <Input placeholder="Subject"/>
          <textarea placeholder="Message" rows="5" className="rounded-xl bg-white/8 border border-white/15 backdrop-blur-xl px-4 py-3 text-slate-100 placeholder:text-slate-300/60 focus:outline-none focus:ring-2 focus:ring-teal-300/40"/>
          <div className="flex items-center justify-between">
            <div className="flex gap-3 text-slate-200/90">
              <a href="#" className="inline-flex items-center gap-2 hover:text-teal-200"><Github size={18}/> GitHub</a>
              <a href="#" className="inline-flex items-center gap-2 hover:text-teal-200"><Linkedin size={18}/> LinkedIn</a>
            </div>
            <PrimaryButton>Send Message</PrimaryButton>
          </div>
        </form>
      </GlassCard>
    </section>
  )
}

function Input(props){
  return (
    <input {...props} className="rounded-xl bg-white/8 border border-white/15 backdrop-blur-xl px-4 py-3 text-slate-100 placeholder:text-slate-300/60 focus:outline-none focus:ring-2 focus:ring-teal-300/40"/>
  )
}
