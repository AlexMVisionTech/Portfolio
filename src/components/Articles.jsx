import { articles } from '../data/profile'
import { ArrowRightIcon, NewsIcon } from './Icons'

export default function Articles() {
  if (articles.length === 0) return null

  return (
    <section className="blog" id="articles">
      <div className="container">
        <div className="section-header reveal">
          <p>From Blog</p>
          <h2>Latest Articles</h2>
        </div>

        <div className="blog-grid">
          {articles.map((a) => (
            <article className="blog-item reveal" key={a.title}>
              <div className="blog-img" aria-hidden="true">
                {a.image ? <img src={a.image} alt="" loading="lazy" /> : <NewsIcon />}
              </div>
              <div className="blog-text">
                <div className="blog-meta">
                  {a.source && <p><strong>{a.source}</strong></p>}
                  {a.date && <p>{a.date}</p>}
                </div>
                <h2>{a.title}</h2>
                <p>{a.excerpt}</p>
                <a
                  className="btn"
                  href={a.link || '#'}
                  target={a.link ? '_blank' : undefined}
                  rel="noreferrer"
                >
                  Read More <ArrowRightIcon />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
