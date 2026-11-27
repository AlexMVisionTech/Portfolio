import { useEffect, useRef } from 'react'
import { experience } from '../data/profile'

export default function Experience() {
  const timelineRef = useRef(null)
  const progressRef = useRef(null)

  // Scroll-drawn glowing trunk line + row illumination: each card lights
  // up the moment the glowing tip reaches its node.
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const timeline = timelineRef.current
    if (!timeline) return
    timeline.classList.add('tree-fx')

    let raf
    const update = () => {
      raf = null
      const bar = progressRef.current
      if (!bar) return
      const rect = timeline.getBoundingClientRect()
      const total = rect.height
      if (total <= 0) return
      const passed = Math.min(Math.max(window.innerHeight * 0.75 - rect.top, 0), total)
      bar.style.height = `${(passed / total) * 100}%`

      // Illuminate each row when the glowing tip reaches its node
      const tipY = rect.top + passed
      timeline.querySelectorAll('.tree-item').forEach((item) => {
        const node = item.querySelector('.tree-node')
        if (!node) return
        const nodeRect = node.getBoundingClientRect()
        item.classList.toggle('lit', tipY >= nodeRect.top + nodeRect.height / 2)
      })
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      timeline.classList.remove('tree-fx')
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  // Reveal rows as they scroll into view. Self-contained (instead of
  // relying on the page-level observer) so it keeps working after
  // hot-reloads, without a full page refresh.
  useEffect(() => {
    const timeline = timelineRef.current
    if (!timeline) return
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            io.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )
    timeline.querySelectorAll('.tree-item').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <section className="experience" id="accomplishments">
      <div className="container">
        <div className="section-header reveal">
          <p>Career</p>
          <h2>Accomplishments</h2>
        </div>

        <div className="timeline" ref={timelineRef}>
          <div className="timeline-progress" ref={progressRef} aria-hidden="true" />
          {experience.map((job, i) => (
            <div
              className={`tree-item reveal ${i % 2 === 0 ? 'left fx-from-left' : 'right fx-from-right'}`}
              key={`${job.role}-${i}`}
            >
              <span className="tree-node" aria-hidden="true" />
              <span className="tree-date">{job.period}</span>
              <span className="tree-branch" aria-hidden="true" />
              <div className="tree-card">
                {job.image && (
                  <img className="tree-photo" src={job.image} alt={job.org} loading="lazy" />
                )}
                <h2>{job.role}</h2>
                <h4>{job.org}</h4>
                <p>{job.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
