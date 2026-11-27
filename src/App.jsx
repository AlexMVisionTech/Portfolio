import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Networth from './components/Networth'
import Experience from './components/Experience'
import Portfolio from './components/Portfolio'
import Quotes from './components/Quotes'
import Articles from './components/Articles'
import Footer from './components/Footer'

export default function App() {
  // Reveal-on-scroll: fades sections in, animates skill progress bars
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )

    document.querySelectorAll('.reveal, .progress').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Networth />
        <Experience />
        <Portfolio />
        <Quotes />
        <Articles />
      </main>
      <Footer />
    </>
  )
}
