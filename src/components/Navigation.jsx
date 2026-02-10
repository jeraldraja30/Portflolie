import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useScrollSection } from '../hooks/useScrollSection'
import './Navigation.css'

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'resume', label: 'Resume' },
  { id: 'codingprofiles', label: 'Profiles' },
  { id: 'contact', label: 'Contact' }
]

function Navigation() {
  const { activeSection, scrollToSection } = useScrollSection()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollContainer = document.querySelector('.scroll-container')
      if (scrollContainer) {
        setIsScrolled(scrollContainer.scrollTop > 50)
      }
    }

    const scrollContainer = document.querySelector('.scroll-container')
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll, { passive: true })
      return () => scrollContainer.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId)
  }

  return (
    <motion.nav
      className={`navigation ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="nav-container">
        <motion.div
          className="nav-logo"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollToSection('home')}
          style={{ cursor: 'pointer' }}
        >
          Portfolio
        </motion.div>

        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleNavClick(item.id)}
                className={activeSection === item.id ? 'active' : ''}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    className="nav-indicator"
                    layoutId="nav-indicator"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        <div className="nav-mobile-toggle">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navigation

