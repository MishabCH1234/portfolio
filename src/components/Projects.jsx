import useScrollReveal from '../hooks/useScrollReveal'
import { FaGithub, FaLink } from 'react-icons/fa'

const projects = [
  {
    title: 'Comparative study on the performance of auto encoders in detecting deep fake images',
    details:
      'Conducted a comparative study evaluating different autoencoder architectures for detecting deepfake images. Analyzed their performance in identifying manipulated visuals by measuring accuracy, robustness, and feature extraction capabilities.',
    tech: ['ML', 'kaggle', 'Pytorch', 'tensorflow'],
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    title: 'Detecting deepfake images and videos using autoencoder, PG mini-project',
    details:
      'Developed models to detect deepfake images and videos using image-based and video- based analysis techniques. Applied deep learning, particularly autoencoder.',
    tech: ['ML', 'Pytorch'],
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    title: 'Build Tracker',
    details:
      'CiviManage is a web-based civil construction management system designed to manage site workers, billing, project expenses, and financial tracking. The platform allows administrators to monitor credit and debit transactions, maintain worker profiles, and efficiently organize construction site operations in one centralized system',
    tech: ['ReactJS', 'Tailwind', 'NodeJS', 'MySql'],
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    title: 'Automatic Answer Checker',
    details:
      'Introducing Netflix Clone - an Ultimate Entertainment Destination. Crafted with precision and powered by cutting-edge technologies, Netflix offers a seamless and immersive streaming experience that rivals even the biggest names in the industry.',
    tech: ['Django', ' ', 'CSS'],
    githubUrl: '#',
    liveUrl: '#',
  },
]

function Projects() {
  const { ref, visible } = useScrollReveal()
  const isActiveUrl = (url) => Boolean(url && url !== '#')
  const renderProjectLink = (url, icon, label) => {
    if (!isActiveUrl(url)) {
      return (
        <span className="project-link project-link-disabled" aria-disabled="true">
          {icon}
          {label}
        </span>
      )
    }

    return (
      <a className="project-link" href={url} target="_blank" rel="noreferrer">
        {icon}
        {label}
      </a>
    )
  }

  return (
    <section id="projects" ref={ref} className={visible ? 'section reveal visible' : 'section reveal'}>
      <h2 className="section-title">projects.</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <article key={project.title} className="project-card" style={{ animationDelay: `${index * 90}ms` }}>
            <h3>{project.title}</h3>
            <p>{project.details}</p>
            <ul className="project-tech-list">
              {project.tech.map((item) => (
                <li key={`${project.title}-${item}`} className="project-tech-pill">
                  {item}
                </li>
              ))}
            </ul>
            <div className="project-links">
              {renderProjectLink(project.githubUrl, <FaGithub />, 'View Project')}
              {renderProjectLink(project.liveUrl, <FaLink />, 'Live')}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
