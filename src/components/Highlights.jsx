import React from 'react'
import { motion } from 'framer-motion'

const features = [
  {
    title: 'Color Quests',
    desc: 'Playful mini-challenges that unlock new hues and badges as you explore.',
    colors: 'from-pink-500 to-rose-500',
  },
  {
    title: 'Idea Garden',
    desc: 'Plant your ideas, watch them grow with community feedback and love.',
    colors: 'from-violet-500 to-indigo-500',
  },
  {
    title: 'Story Sparks',
    desc: 'Short, uplifting tales of young leaders lighting up their world.',
    colors: 'from-cyan-500 to-sky-500',
  },
]

export default function Highlights() {
  return (
    <section id="explore" className="relative bg-[#07070b]">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
            Grow with playful creativity
          </h2>
          <p className="mt-4 text-fuchsia-100/80 max-w-2xl mx-auto">
            A colorful path to curiosity, confidence, and community.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur p-6"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${f.colors} opacity-10`} />
              <div className="relative">
                <div className={`inline-flex px-3 py-1 rounded-full bg-gradient-to-r ${f.colors} text-white text-xs font-semibold mb-4`}>
                  Featured
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{f.title}</h3>
                <p className="text-fuchsia-100/80">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
