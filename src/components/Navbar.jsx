import React from 'react'
import { motion } from 'framer-motion'

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <nav className="flex items-center justify-between rounded-2xl bg-black/40 backdrop-blur border border-white/10 px-4 py-3">
          <a href="#home" className="flex items-center gap-2">
            <motion.span
              initial={{ scale: 0.8, rotate: -8 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 14 }}
              className="inline-block h-6 w-6 rounded-full bg-gradient-to-tr from-fuchsia-500 via-violet-500 to-sky-500"
            />
            <span className="text-white font-extrabold tracking-tight text-lg bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-300 via-violet-200 to-sky-300">
              the blooming leaders
            </span>
          </a>
          <div className="hidden md:flex items-center gap-3">
            {[
              { href: '#explore', label: 'Explore' },
              { href: '#activities', label: 'Activities' },
              { href: '#stories', label: 'Stories' },
              { href: '#join', label: 'Join' },
            ].map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-white/80 hover:text-white transition px-3 py-2 rounded-lg hover:bg-white/10">
                {l.label}
              </a>
            ))}
          </div>
          <a href="#join" className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-fuchsia-500 via-violet-500 to-sky-500 text-white font-semibold shadow-lg shadow-fuchsia-500/30 hover:shadow-fuchsia-500/50 transition">
            Get Started
          </a>
        </nav>
      </div>
    </header>
  )
}
