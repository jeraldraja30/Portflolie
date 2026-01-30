import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import './Navigation.css'

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/skills', label: 'Skills' },
  { path: '/projects', label: 'Projects' },
  { path: '/resume', label: 'Resume' },
  { path: '/coding-profiles', label: 'Profiles' },
  { path: '/contact', label: 'Contact' }
]

function Navigation() {
  const location = useLocation()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
        >
          <Link to="/">Portfolio</Link>
        </motion.div>
        
        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link to={item.path} className={location.pathname === item.path ? 'active' : ''}>
                {item.label}
                {location.pathname === item.path && (
                  <motion.div
                    className="nav-indicator"
                    layoutId="nav-indicator"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
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

