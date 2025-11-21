import React from 'react'
import { motion } from 'framer-motion'

export default function CallToAction() {
  return (
    <section id="join" className="relative bg-gradient-to-b from-[#07070b] to-black">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-8 md:p-12">
          <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-fuchsia-500/20 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-sky-500/20 blur-3xl" />

          <div className="relative">
            <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
              Join the Bloom Club
            </h3>
            <p className="mt-3 text-fuchsia-100/80 max-w-2xl">
              Sign up to receive new challenges, stories, and creative ideas every week. Let your colors shine.
            </p>

            <form className="mt-6 grid sm:grid-cols-[1fr_auto] gap-3 max-w-xl">
              <input
                type="email"
                required
                placeholder="Your email"
                className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
              />
              <button type="submit" className="rounded-xl px-5 py-3 font-semibold text-white bg-gradient-to-r from-fuchsia-500 via-violet-500 to-sky-500 shadow-lg shadow-fuchsia-500/30 hover:shadow-fuchsia-500/50 transition">
                Bloom with us
              </button>
            </form>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-4 text-xs text-white/60"
            >
              By joining, you agree to our friendly updates. No spam, just color.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  )
}
