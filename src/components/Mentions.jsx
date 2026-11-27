import { mentions } from '../data/profile'
import { ArrowRightIcon, NewsIcon } from './Icons'

// "Featured In" — press & newsletter mentions, rendered inside the
// Portfolio section (between the projects and the Moments gallery).
// Returns nothing when the mentions array is empty.
export default function Mentions() {
  if (mentions.length === 0) return null

  return (
    <div className="mentions-wrap">
      <div className="section-header">
        <p>Featured In</p>
        <h2>Media &amp; Mentions</h2>
      </div>

      <div className="blog-grid">
        {mentions.map((m) => (
          <article className="blog-item" key={m.title}>
            <div className="blog-img" aria-hidden="true">
              {m.image ? (
                <img src={m.image} alt="" loading="lazy" />
              ) : (
                <NewsIcon />
              )}
            </div>
            <div className="blog-text">
              <div className="blog-meta">
                {m.source && <p><strong>{m.source}</strong></p>}
                {m.date && <p>{m.date}</p>}
              </div>
              <h2>{m.title}</h2>
              <p>{m.excerpt}</p>
              <a
                className="btn"
                href={m.link || '#'}
                target={m.link ? '_blank' : undefined}
                rel="noreferrer"
              >
                Read More <ArrowRightIcon />
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
