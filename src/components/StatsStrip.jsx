import React from 'react'
import { GlassCard } from './GlassUI'
import { Rocket, Cpu, BarChart3, Users } from 'lucide-react'

const items = [
  { icon: Rocket, text: 'Lead efficiency ↑40%' },
  { icon: Cpu, text: 'API performance ↑50%' },
  { icon: BarChart3, text: 'Engagement ↑35%' },
  { icon: Users, text: '5,000+ users maintained' },
]

export default function StatsStrip(){
  return (
    <div className="px-6">
      <GlassCard className="px-4 py-3 md:px-6 md:py-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {items.map(({icon:Icon, text})=> (
            <div key={text} className="flex items-center gap-2 md:gap-3 text-slate-100">
              <div className="w-8 h-8 rounded-xl bg-white/8 border border-white/15 flex items-center justify-center text-teal-200 shadow-inner">
                <Icon size={16}/>
              </div>
              <p className="text-sm md:text-base text-slate-200/90">{text}</p>
            </div>
          ))}
        </div>
      </GlassCard>
    </div>
  )
}
