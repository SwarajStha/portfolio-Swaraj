import Navbar from './components/Navbar'
import Homepage from './components/Homepage'
import Technologies from './components/Technologies'
import Experience from './components/Experience'
import Education from './components/Education'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Photography from './components/Photography'

function App() {
  return (
      <div className="overflow-x-hidden">
          <Navbar />
          <Homepage />
          <Education />
          <Technologies />
          <Experience />
          <Projects />
          <Photography />
          <Contact />
      </div>
  )
}

export default App
