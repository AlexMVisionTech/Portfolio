import { useEffect, useState } from 'react'
import { profile } from '../data/profile'
import { LinkedinIcon, GithubIcon, MailIcon } from './Icons'

// Typing animation for the role line — types each role, deletes, moves on.
function useTypedRole() {
  const [text, setText] = useState('')

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setText(profile.typedRoles[0])
      return
    }

    let roleIdx = 0
    let i = 0
    let deleting = false
    let timer

    const tick = () => {
      const full = profile.typedRoles[roleIdx]
      i = deleting ? i - 1 : i + 1
      setText(full.slice(0, i))

      let delay = deleting ? 45 : 90
      if (!deleting && i === full.length) {
        delay = 1800
        deleting = true
      } else if (deleting && i === 0) {
        deleting = false
        roleIdx = (roleIdx + 1) % profile.typedRoles.length
        delay = 400
      }
      timer = setTimeout(tick, delay)
    }

    timer = setTimeout(tick, 400)
    return () => clearTimeout(timer)
  }, [])

  return text
}

export default function Hero() {
  const typed = useTypedRole()
  const { linkedin, github } = profile.socials

  return (
    <section className="hero" id="home">
      <div className="hero-grid">
        <div className="hero-text">
          <p>I&rsquo;m</p>
          <h1>{profile.name}</h1>
          <h2>
            {typed}
            <span className="typed-cursor">&nbsp;|</span>
          </h2>
          {profile.tagline && <p className="hero-desc">{profile.tagline}</p>}

          <div className="hero-btns">
            <a className="btn btn-white" href={linkedin} target="_blank" rel="noreferrer">
              <LinkedinIcon size={16} /> LinkedIn
            </a>
            {!github.startsWith('[EDIT]') && github && (
              <a className="btn btn-white" href={github} target="_blank" rel="noreferrer">
                <GithubIcon size={16} /> GitHub
              </a>
            )}
            <a className="btn btn-white" href="#about">
              Learn About Me
            </a>
            {profile.resumeUrl && (
              <a className="btn btn-white" href={profile.resumeUrl} target="_blank" rel="noreferrer">
                <MailIcon size={16} /> Download CV
              </a>
            )}
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-image-box">
            {profile.photo ? (
              <img src={profile.photo} alt={profile.name} />
            ) : (
              <span className="hero-initials" aria-hidden="true">{profile.initials}</span>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
