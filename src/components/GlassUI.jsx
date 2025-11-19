import React from 'react'
import { cn } from '../utils/cn'

export function GlassCard({ className = '', children, as: Comp = 'div', ...props }) {
  return (
    <Comp
      className={cn(
        'relative rounded-2xl bg-white/8 backdrop-blur-xl border border-white/15 shadow-[0_8px_40px_rgba(0,0,0,0.35)]',
        'before:absolute before:inset-0 before:rounded-2xl before:pointer-events-none before:[background:radial-gradient(1200px_400px_at_-20%_-20%,rgba(45,212,191,0.12),transparent_60%),radial-gradient(1000px_300px_at_120%_120%,rgba(248,212,155,0.10),transparent_60%)]',
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  )
}

export function PrimaryButton({ className = '', children, ...props }) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-900',
        'bg-gradient-to-tr from-teal-300 via-teal-200 to-amber-200 hover:from-teal-200 hover:to-amber-100',
        'shadow-[0_8px_30px_rgba(45,212,191,0.35)] active:scale-[0.99] transition-all',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export function SecondaryButton({ className = '', children, ...props }) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-teal-200',
        'bg-white/6 hover:bg-white/10 border border-white/15 backdrop-blur-xl',
        'shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)] active:scale-[0.99] transition-all',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export function Tag({ children }) {
  return (
    <span className="px-2.5 py-1 rounded-full text-xs font-medium text-teal-200/90 bg-white/8 border border-white/15 backdrop-blur-md">
      {children}
    </span>
  )
}
