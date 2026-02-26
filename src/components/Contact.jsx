import useScrollReveal from '../hooks/useScrollReveal'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'
import profile from '../config/profile'

function Contact() {
  const { ref, visible } = useScrollReveal()
  const { displayName, linkedin, github, instagram, email } = profile

  return (
    <section id="contact" ref={ref} className={visible ? 'section reveal visible' : 'section reveal'}>
      <h2 className="section-title">contact.</h2>

      <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
        <input type="text" name="name" placeholder="Name" />
        <input type="email" name="email" placeholder="Email" />
        <textarea name="message" rows="5" placeholder="Message" />
        <button type="submit">Send</button>
      </form>

      <footer className="footer-min">
        {email && <a href={`mailto:${email}`}>{email}</a>}
        <div className="footer-socials">
          <a href={linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
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
        <p>&copy; {new Date().getFullYear()} {displayName}</p>
      </footer>
    </section>
  )
}

export default Contact
