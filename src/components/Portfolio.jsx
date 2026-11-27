import { useEffect, useRef, useState } from 'react'
import { projects } from '../data/profile'
import Gallery from './Gallery'
import Mentions from './Mentions'
import { ArrowRightIcon } from './Icons'

export default function Portfolio() {
  const categories = ['All', ...new Set(projects.map((p) => p.category))]
  const [filter, setFilter] = useState('All')
  const [shown, setShown] = useState(false)
  const revealRef = useRef(null)

  // Self-contained reveal — chips and rows wave in when they enter the
  // viewport (hot-reload safe, replays on filter changes).
  useEffect(() => {
    const el = revealRef.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          io.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const visible = filter === 'All' ? projects : projects.filter((p) => p.category === filter)

  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <div className="section-header reveal">
          <p>My Work</p>
          <h2>Portfolio</h2>
        </div>

        <div className="portfolio-reveal" ref={revealRef}>
          <ul className={`portfolio-filter ${shown ? 'in' : ''}`} aria-label="Portfolio category filter">
            {categories.map((cat) => (
              <li
                key={cat}
                className={filter === cat ? 'filter-active' : ''}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </li>
            ))}
          </ul>

          <div className={`work-list ${shown ? 'in' : ''}`} key={filter}>
            {visible.map((p, i) => (
              <a
                className="work-row"
                key={p.title}
                href={p.link || '#'}
                target={p.link ? '_blank' : undefined}
                rel="noreferrer"
              >
                <span className="work-num" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="work-main">
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                </div>
                <div className="work-meta">
                  <span className="work-cat">{p.category}</span>
                  <span className="work-tags">{p.tags.join(' · ')}</span>
                </div>
                <span className="work-arrow" aria-hidden="true">
                  <ArrowRightIcon size={20} />
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Featured In — press & newsletter mentions */}
        <Mentions />

        {/* Moments gallery — under the projects */}
        <Gallery />
      </div>
    </section>
  )
}
