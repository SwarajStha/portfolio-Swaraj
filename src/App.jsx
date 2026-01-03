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
    <div className="overflow-x-hidden relative min-h-screen">
      {/* Global Background */}
      <img
        className="fixed top-0 left-0 w-full h-screen object-cover object-left -z-10"
        src="/backgroundPPcropped.jpg"
        alt="Background"
      />
      <Header />
      <Homepage />
      <Education />
      <Experience />
      <Projects />
      <Technologies />
      <Photography />
      <Contact />
    </div>
  )
}

export default App
