import useScrollReveal from '../hooks/useScrollReveal'

function About() {
  const { ref, visible } = useScrollReveal()

  return (
    <section id="about" ref={ref} className={visible ? 'section reveal visible' : 'section reveal'}>
      <h2 className="section-title">about.</h2>
      <p className="about-copy">
        I am an MSc Computer Science graduate specializing in full-stack development and machine
        learning. I build modern web applications with a focus on clean architecture, strong user
        experience, and practical AI-driven features. I enjoy solving real-world problems through
        thoughtful design and reliable engineering.
      </p>
    </section>
  )
}

export default About
