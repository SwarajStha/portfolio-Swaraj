import Header from './components/Header'
import Homepage from './components/Homepage'
import Technologies from './components/Technologies'
import Experience from './components/Experience'
import Education from './components/Education'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Photography from './components/Photography'

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-ink-900">
      {/* Ambient glows: one continuous canvas so sections flow into each other */}
      <div className="pointer-events-none fixed inset-0 -z-10" aria-hidden="true">
        <div className="absolute -top-40 -left-40 h-[34rem] w-[34rem] rounded-full bg-cyan-500/10 blur-[130px]" />
        <div className="absolute top-1/3 -right-48 h-[38rem] w-[38rem] rounded-full bg-violet-500/10 blur-[140px]" />
        <div className="absolute bottom-0 left-1/4 h-[30rem] w-[30rem] rounded-full bg-fuchsia-500/[0.07] blur-[130px]" />
        {/* Film grain for texture */}
        <div className="noise-overlay absolute inset-0 opacity-[0.15] mix-blend-overlay" />
      </div>

      <Header />
      <main>
        <Homepage />
        <Education />
        <Experience />
        <Projects />
        <Technologies />
        <Photography />
        <Contact />
      </main>

      <footer className="border-t border-white/5 py-8 text-center font-mono text-xs text-slate-600">
        <p>
          designed &amp; built by{" "}
          <span className="text-slate-400">Swaraj Shrestha</span> · {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  )
}

export default App
