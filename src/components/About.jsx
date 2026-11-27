import { about, profile } from '../data/profile'
import { MapPinIcon } from './Icons'

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-grid">
        <div className="about-img">
          {profile.photo ? (
            <img src={profile.photo} alt={profile.name} />
          ) : (
            <div className="fallback">
              <span aria-hidden="true">{profile.initials}</span>
            </div>
          )}

          {/* Floating identity card overlapping the photo */}
          <div className="about-id-card reveal">
            <span className="id-badge" aria-hidden="true">{profile.initials}</span>
            <div className="id-info">
              <strong>{profile.name}</strong>
              <p>{profile.role}</p>
              <p className="id-loc">
                <MapPinIcon size={12} /> {profile.location}
              </p>
            </div>
          </div>
        </div>

        <div className="about-content">
          <div className="section-header">
            <p>{about.eyebrow}</p>
            <h2>{about.title}</h2>
          </div>

          {/* Identity chips */}
          {about.roles?.length > 0 && (
            <div className="about-roles reveal">
              {about.roles.map((r) => (
                <span key={r}>{r}</span>
              ))}
            </div>
          )}

          <div className="about-text">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <p className="about-label reveal">Core Competencies</p>

          <div className="skills reveal">
            {about.skills.map((s) => (
              <div className="skill-name" key={s.name}>
                <p>{s.name}</p>
                <p>{s.pct}%</p>
                <div className="progress" style={{ '--bar': `${s.pct}%` }}>
                  <div className="progress-bar" role="progressbar" aria-valuenow={s.pct} aria-valuemin="0" aria-valuemax="100" aria-label={s.name}></div>
                </div>
              </div>
            ))}
          </div>

          <p className="about-label reveal">Credentials &amp; Highlights</p>

          <ul className="about-edu reveal">
            {about.education.map((e) => (
              <li key={e.title}>
                <strong>{e.title}</strong>
                {e.meta && <span className="edu-meta"> — {e.meta}</span>}
              </li>
            ))}
          </ul>

          <a href="#accomplishments" className="btn reveal">
            Learn More
          </a>
        </div>
      </div>
    </section>
  )
}
