import './App.css'
import Home from './components/Home'
import Projects from './components/Projects'
import Education from './components/Education'
import Skills from './components/Skills'
import Publication from './components/Publication'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <main className="site">
      <Home />
      <About />
      <div className="divider-image divider-about-projects" aria-hidden="true" />
      <Projects />
      <div className="divider-image divider-projects-education" aria-hidden="true" />
      <Education />
      <div className="divider-image divider-education-skills" aria-hidden="true" />
      <Skills />
      <div className="divider-image divider-central" aria-hidden="true" />
      <Publication />
      <div className="divider-image divider-publication-contact" aria-hidden="true" />
      <Contact />
    </main>
  )
}

export default App
