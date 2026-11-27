import { useEffect, useState } from 'react'
import { profile, navLinks } from '../data/profile'
import { LinkedinIcon, GithubIcon, TwitterIcon, MailIcon, ChevronUpIcon, MapPinIcon } from './Icons'

function BackToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 350)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      className={`back-to-top ${show ? 'show' : ''}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
    >
      <ChevronUpIcon />
    </button>
  )
}

export default function Footer() {
  const year = new Date().getFullYear()
  const { linkedin, github, twitter } = profile.socials
  const emailReady = !profile.email.startsWith('[EDIT]')

  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-info">
          <h2>{profile.name}</h2>
          <h3>
            {profile.role} &nbsp;·&nbsp; {profile.location}
            <br />
            {profile.phone && (
              <>
                {profile.phone} &nbsp;·&nbsp;{' '}
              </>
            )}
            {emailReady && (
              <>
                <a href={`mailto:${profile.email}`}>{profile.email}</a> &nbsp;·&nbsp;{' '}
              </>
            )}
            <a href={linkedin} target="_blank" rel="noreferrer">
              linkedin.com/in/alex-mwera-222256y
            </a>
          </h3>

          <nav className="footer-menu" aria-label="Footer navigation">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </nav>

          <div className="footer-social">
            <a href={linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
              <LinkedinIcon />
            </a>
            {!github.startsWith('[EDIT]') && github && (
              <a href={github} target="_blank" rel="noreferrer" aria-label="GitHub profile">
                <GithubIcon />
              </a>
            )}
            {twitter && (
              <a href={twitter} target="_blank" rel="noreferrer" aria-label="X (Twitter) profile">
                <TwitterIcon />
              </a>
            )}
            {emailReady && (
              <a href={`mailto:${profile.email}`} aria-label="Send email">
                <MailIcon />
              </a>
            )}
          </div>
        </div>

        <div className="footer-copyright">
          <p>
            &copy; {year} <a href="#home">{profile.name}</a>. All Rights Reserved.
          </p>
        </div>
      </div>

      <BackToTop />
    </footer>
  )
}
