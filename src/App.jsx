import React, { useRef } from 'react'
import { Navbar, Footer } from './components/NavFooter'
import Hero from './components/Hero'
import StatsStrip from './components/StatsStrip'
import Projects from './components/Projects'
import Timeline from './components/Timeline'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  const projectsRef = useRef(null)
  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-[radial-gradient(1200px_600px_at_-10%_-10%,#0b1220,transparent_60%),radial-gradient(1200px_600px_at_110%_-10%,#0b1220,transparent_60%),#0a0f1a] relative text-slate-100">
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(600px_300px_at_40%_0%,rgba(45,212,191,0.2),transparent_60%),radial-gradient(700px_300px_at_60%_100%,rgba(248,212,155,0.16),transparent_60%)]" />

      <Navbar />
      <Hero onViewProjects={scrollToProjects} />
      <div className="my-6"><StatsStrip /></div>
      <Projects ref={projectsRef} />
      <div id="experience"><Timeline /></div>
      <div id="skills"><Skills /></div>
      <div id="contact"><Contact /></div>
      <Footer />
    </div>
  )
}

export default App
