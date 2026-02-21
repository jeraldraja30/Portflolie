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
  const [isOpen, setIsOpen] = useState(false)

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
    setIsOpen(false)
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <motion.nav
      className={`navigation ${isScrolled ? 'scrolled' : ''} ${isOpen ? 'nav-open' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="nav-container">
        <motion.div
          className="nav-logo"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            scrollToSection('home')
            setIsOpen(false)
          }}
          style={{ cursor: 'pointer' }}
        >
          Portfolio
        </motion.div>

        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
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

        <motion.div
          className="nav-mobile-toggle"
          onClick={toggleMenu}
          whileTap={{ scale: 0.9 }}
        >
          <span className={isOpen ? 'top rotate' : 'top'}></span>
          <span className={isOpen ? 'mid hide' : 'mid'}></span>
          <span className={isOpen ? 'bot rotate' : 'bot'}></span>
        </motion.div>
      </div>
    </motion.nav>
  )
}

export default Navigation

