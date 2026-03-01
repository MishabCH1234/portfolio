import useScrollReveal from '../hooks/useScrollReveal'

const publications = [
  {
    title: 'Comparative Study on the Performance of Auto Encoders in Detecting Deep Fake Images',
    description:
      'Conducted a comparative study evaluating different autoencoder architectures for detecting deepfake images.',
    venue: 'IEEE Conference on Computer Vision',
    year: '2025',
  },
]

function Publication() {
  const { ref, visible } = useScrollReveal()

  return (
    <section
      id="publication"
      ref={ref}
      className={visible ? 'section reveal visible' : 'section reveal'}
    >
      <h2 className="section-title">publication.</h2>
      <ul className="info-list">
        {publications.map((pub) => (
          <li key={pub.title} className="info-item publication-a">
            <h3>{pub.title}</h3>
            <p>{pub.description}</p>
            <p>
              <a href="https://ieeexplore.ieee.org/document/11032058" target="_blank" rel="noreferrer">
              {pub.venue} ({pub.year})
              </a>
            </p>

          </li>
        ))}
      </ul>
    </section>
  )
}

export default Publication
