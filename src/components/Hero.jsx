import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      {/* 3D Spline cover background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/g2cnMT7B1IgkJ7Ie/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient glaze to blend with content (doesn't block interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 md:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur border border-white/20 text-white text-sm mb-6">
            <span className="h-2 w-2 rounded-full bg-fuchsia-400 animate-pulse" />
            Welcome to
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white">
            the blooming leaders
          </h1>
          <p className="mt-4 md:mt-6 text-base md:text-lg text-fuchsia-100/90 max-w-2xl mx-auto">
            A vibrant space for young minds to grow, create, and lead with color. Explore inspiring stories, playful challenges, and interactive experiences.
          </p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <a href="#explore" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-fuchsia-500 via-violet-500 to-sky-500 text-white font-semibold shadow-lg shadow-fuchsia-500/30 hover:shadow-fuchsia-500/50 transition">
              Explore now
            </a>
            <a href="#join" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 text-white font-semibold border border-white/20 backdrop-blur hover:bg-white/15 transition">
              Join the club
            </a>
          </div>
        </motion.div>

        {/* Floating badges */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="pointer-events-none absolute bottom-10 left-6 right-6 grid grid-cols-2 md:grid-cols-4 gap-3"
        >
          {[
            { t: 'Creativity', c: 'from-pink-500 to-rose-500' },
            { t: 'Curiosity', c: 'from-violet-500 to-indigo-500' },
            { t: 'Confidence', c: 'from-cyan-500 to-sky-500' },
            { t: 'Community', c: 'from-emerald-500 to-lime-500' },
          ].map((b, i) => (
            <div key={i} className={`rounded-xl bg-gradient-to-r ${b.c} text-white/90 text-sm md:text-base font-semibold px-4 py-3 shadow-lg shadow-black/30 text-center`}>
              {b.t}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
