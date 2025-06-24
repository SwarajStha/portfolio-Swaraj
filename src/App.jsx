import Navbar from './components/Navbar'
import Homepage from './components/Homepage'
import Technologies from './components/Technologies'
import Experience from './components/Experience'
import Education from './components/Education'
import Contact from './components/Contact'
import Projects from './components/Projects'

function App() {
  return (
      <div className="overflow-x-hidden">
          <Navbar />
          <Homepage />
          <Education />
          <Technologies />
          <Experience />
          <Projects />
          <Contact />
      </div>
  )
}

export default App
