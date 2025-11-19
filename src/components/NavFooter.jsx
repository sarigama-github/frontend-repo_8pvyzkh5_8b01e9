import React from 'react'
import { SecondaryButton } from './GlassUI'
import { Menu } from 'lucide-react'

export function Navbar(){
  return (
    <div className="sticky top-0 z-40">
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent"/>
      <div className="relative max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-white font-bold tracking-[0.25em]">SARAVANAN</a>
        <div className="hidden md:flex items-center gap-6 text-slate-200/90">
          <a href="#projects" className="hover:text-teal-200">Projects</a>
          <a href="#experience" className="hover:text-teal-200">Experience</a>
          <a href="#skills" className="hover:text-teal-200">Skills</a>
          <a href="#contact" className="hover:text-teal-200">Contact</a>
          <SecondaryButton>Resume</SecondaryButton>
        </div>
        <button className="md:hidden text-white/80"><Menu/></button>
      </div>
    </div>
  )
}

export function Footer(){
  return (
    <footer className="py-12 text-center text-slate-400">
      <p>© {new Date().getFullYear()} Saravanan Ramesh. All rights reserved.</p>
    </footer>
  )
}
