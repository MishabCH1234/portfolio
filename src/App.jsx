import { Component } from 'react'
import './App.css'
import Home from './components/Home'
import Projects from './components/Projects'
import Education from './components/Education'
import Skills from './components/Skills'
import Publication from './components/Publication'
import About from './components/About'
import Contact from './components/Contact'

class AppErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="site">
          <section className="section">
            <h2 className="section-title">Something went wrong.</h2>
            <p className="about-copy">Please refresh the page and try again.</p>
          </section>
        </main>
      )
    }

    return this.props.children
  }
}

function AppContent() {
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

function App() {
  return (
    <AppErrorBoundary>
      <AppContent />
    </AppErrorBoundary>
  )
}

export default App
