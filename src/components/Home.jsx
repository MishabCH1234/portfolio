import logoImage from '../assets/Gemini_Generated_Image_6b3ntj6b3ntj6b3n.png'
import cv from '../assets/MUHAMMED-MISHAB-CH (2).pdf'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'
import profile from '../config/profile'

const { displayName, linkedin, github, instagram } = profile

function Home() {
  return (
    <>
      <section className="home-cover">
        <header className="top-nav">
          <div className="logo-mark">
            <img src={logoImage} alt="UA logo" className="logo-image" />
          </div>
          <nav className="menu-links" aria-label="Primary">
            <a href="#projects">projects.</a>
            <a href="#education">education.</a>
            <a href="#skills">skills.</a>
            <a href="#publication">publication.</a>
            <a href="#about">about.</a>
            <a href="#contact">contact.</a>
          </nav>
        </header>

        <section id="home" className="hero">
          <div className="intro-block">
            <h1 className="intro-name name-sequence" aria-label={displayName}>
              {displayName.split('').map((char, index) => (
                <span
                  key={`${char}-${index}`}
                  className={char === ' ' ? 'name-letter name-space' : 'name-letter'}
                  style={{ '--delay': `${index * 0.08}s` }}
                  aria-hidden="true"
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            </h1>
            <p className="intro-role">Full-Stack Developer | Machine Learning Enthusiast</p>
            <div className="home-actions">
              <div className="home-socials">
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
                <a href={github} target="_blank" rel="noreferrer" aria-label="GitHub">
                  <FaGithub />
                </a>
                {instagram && (
                  <a href={instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
                    <FaInstagram />
                  </a>
                )}
              </div>
              <a className="cv-link" href={cv} target="_blank" rel="noreferrer">
                View CV
              </a>
            </div>
          </div>
        </section>
      </section>

      <div className="divider-image divider-hero" aria-hidden="true" />
    </>
  )
}

export default Home
