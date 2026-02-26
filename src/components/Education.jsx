import useScrollReveal from '../hooks/useScrollReveal'

const educationItems = [
  {
    marker: 'PG',
    degree: 'MSc Computer Science',
    university: 'Cental University of Tamilnadu',
     place:'Tiruvarur, Tamilnadu',
  },
  {
    marker: 'UG',
    degree: 'Bachelor of Technology in Computer Science',
    university: 'PPTM Arts&Scince College, Calicut University',
     place:'Malappuram, Kerala',
  },
  {
    marker: 'XII',
    degree: 'Computer Science (Class XII)',
    university: 'A R Nagar HSS',
     place:'Malappuaram, kerala',
  },
  {
    marker: 'X',
    degree: 'Secondary School (Class X)',
    university: 'A R Nagar Hige School',
    place:'Malapuram, Kerala',
  },
]

function Education() {
  const { ref, visible } = useScrollReveal()

  return (
    <section
      id="education"
      ref={ref}
      className={visible ? 'section reveal visible' : 'section reveal'}
    >
      <h2 className="section-title">education.</h2>
      <div className="edu-timeline">
        {educationItems.map((item, index) => (
          <article
            key={item.degree}
            className={`edu-item ${index % 2 === 0 ? 'edu-left' : 'edu-right'}`}
          >
            <span className="edu-dot" aria-label={`Level ${item.marker}`}>
              {item.marker}
            </span>
            <div className="edu-card">
              <h3>{item.degree}</h3>
              <p>{item.university}</p>
              <p>{item.place}</p>

            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Education
