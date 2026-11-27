import { useEffect, useState } from 'react'
import { quotes, profile } from '../data/profile'
import { QuoteIcon, ChevronLeftIcon, ChevronRightIcon } from './Icons'

const AUTOPLAY_MS = 6500

export default function Quotes() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const prev = () => setIndex((i) => (i - 1 + quotes.length) % quotes.length)
  const next = () => setIndex((i) => (i + 1) % quotes.length)

  useEffect(() => {
    if (paused || quotes.length < 2) return
    const timer = setInterval(next, AUTOPLAY_MS)
    return () => clearInterval(timer)
  }, [paused])

  if (quotes.length === 0) return null

  const quote = quotes[index]

  return (
    <section className="testimonial quotes-section" id="quotes" aria-label="Quotes">
      <div className="testimonial-stage"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        <div className="quote-icon" aria-hidden="true">
          <QuoteIcon />
        </div>

        <div className="testimonial-item" key={index}>
          <div className="testimonial-photo">
            <span aria-hidden="true">
              {profile.photo ? <img src={profile.photo} alt="" /> : profile.initials}
            </span>
          </div>

          <div className="testimonial-text">
            <p>&ldquo;{quote.text}&rdquo;</p>
            <h3>{quote.author}</h3>
            <h4>{quote.authorTitle}</h4>
          </div>
        </div>

        <div className="testimonial-controls">
          <button className="btn btn-white" onClick={prev} aria-label="Previous quote">
            <ChevronLeftIcon />
          </button>
          <div className="testimonial-dots" role="tablist" aria-label="Quote selector">
            {quotes.map((_, i) => (
              <button
                key={i}
                className={`owl-dot ${i === index ? 'active' : ''}`}
                onClick={() => setIndex(i)}
                aria-label={`Go to quote ${i + 1}`}
              />
            ))}
          </div>
          <button className="btn btn-white" onClick={next} aria-label="Next quote">
            <ChevronRightIcon />
          </button>
        </div>
      </div>
    </section>
  )
}
