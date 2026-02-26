import useScrollReveal from '../hooks/useScrollReveal'
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt } from 'react-icons/fa'
import {
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiPytorch,
  SiTensorflow,
  SiPython,
} from 'react-icons/si'

const skills = [
  { name: 'React', percent: 50, icon: FaReact },
  { name: 'JavaScript', percent: 50, icon: SiJavascript },
  { name: 'Python', percent: 80, icon: SiPython },  
  { name: 'HTML', percent: 92, icon: FaHtml5 },
  { name: 'CSS', percent: 86, icon: FaCss3Alt },
  { name: 'Node.js', percent: 82, icon: FaNodeJs },
  { name: 'Express', percent: 80, icon: SiExpress },
  { name: 'MongoDB', percent: 70, icon: SiMongodb },
  { name: 'Git', percent: 70, icon: FaGitAlt },
  { name: 'PyTorch', percent: 50, icon: SiPytorch },
  { name: 'TensorFlow', percent: 50, icon: SiTensorflow },
]

function Skills() {
  const { ref, visible } = useScrollReveal()

  return (
    <section id="skills" ref={ref} className={visible ? 'section reveal visible' : 'section reveal'}>
      <h2 className="section-title">skills.</h2>
      <div className="skill-grid">
        {skills.map((skill) => {
          const Icon = skill.icon
          return (
            <article key={skill.name} className="skill-card">
              <div className="skill-head">
                <span className="skill-logo">
                  <Icon />
                </span>
                <h3>{skill.name}</h3>
                <span className="skill-percent">{skill.percent}%</span>
              </div>
              <div className="skill-track" aria-hidden="true">
                <span className="skill-fill" style={{ width: `${skill.percent}%` }} />
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Skills
