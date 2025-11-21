import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import CallToAction from './components/CallToAction'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <Highlights />
        <CallToAction />
      </main>
      <footer className="border-t border-white/10 bg-black/80">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/70">© {new Date().getFullYear()} the blooming leaders. All colors reserved.</p>
          <div className="flex items-center gap-3 text-xs text-white/60">
            <a href="#" className="hover:text-white">Privacy</a>
            <span>•</span>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
