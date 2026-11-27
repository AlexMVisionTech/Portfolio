import { useEffect, useState } from 'react'
import { navLinks, profile } from '../data/profile'
import { MenuIcon, CloseIcon } from './Icons'

export default function Navbar() {
  const [sticky, setSticky] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => {
      setSticky(window.scrollY > 250)

      // Highlight the link for the section currently in view
      let current = 'home'
      for (const link of navLinks) {
        const el = document.getElementById(link.href.slice(1))
        if (el && el.getBoundingClientRect().top <= 140) current = link.href.slice(1)
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`navbar ${sticky ? 'nav-sticky' : ''}`}>
      <div className="nav-inner">
        <a href="#home" className="brand" onClick={() => setOpen(false)}>
          {profile.name}<span className="accent">.</span>
        </a>

        <nav aria-label="Main navigation">
          <ul className={`nav-links ${open ? 'open' : ''}`}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={active === link.href.slice(1) ? 'active' : ''}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className="nav-toggle"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
    </header>
  )
}
