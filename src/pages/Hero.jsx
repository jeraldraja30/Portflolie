import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Download, ArrowRight } from 'lucide-react'
import SocialLinks from '../components/SocialLinks'
import { useScrollSection } from '../hooks/useScrollSection'
import profilePhoto from '../assets/profile-photo.jpg'
import './Hero.css'

function Hero() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const { scrollToSection } = useScrollSection()

  // Typing animation state
  const roles = ['Frontend Developer', 'Backend Developer', 'Full Stack Developer', 'Software Engineer']
  const [currentRole, setCurrentRole] = useState('')
  const [roleIndex, setRoleIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100 // Very slow typing
    const pauseBeforeDelete = 3000 // Pause before deleting
    const pauseBeforeNext = 500 // Pause before typing next

    const timer = setTimeout(() => {
      const currentFullRole = roles[roleIndex]

      if (!isDeleting && charIndex < currentFullRole.length) {
        // Typing forward
        setCurrentRole(currentFullRole.substring(0, charIndex + 1))
        setCharIndex(charIndex + 1)
      } else if (!isDeleting && charIndex === currentFullRole.length) {
        // Finished typing, pause then start deleting
        setTimeout(() => setIsDeleting(true), pauseBeforeDelete)
      } else if (isDeleting && charIndex > 0) {
        // Deleting
        setCurrentRole(currentFullRole.substring(0, charIndex - 1))
        setCharIndex(charIndex - 1)
      } else if (isDeleting && charIndex === 0) {
        // Finished deleting, move to next role
        setIsDeleting(false)
        setRoleIndex((roleIndex + 1) % roles.length)
        setTimeout(() => { }, pauseBeforeNext)
      }
    }, typingSpeed)

    return () => clearTimeout(timer)
  }, [charIndex, isDeleting, roleIndex, roles])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  }

  return (
    <motion.div
      className="hero-page"
      data-section="home"
      ref={ref}
    >
      <div className="hero-overlay"></div>

      <motion.div
        className="hero-container"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Left Column - Text Content */}
        <div className="hero-left">
          <motion.p className="hero-intro" variants={itemVariants}>
            Hello, I'm
          </motion.p>

          <motion.h1 className="hero-name" variants={itemVariants}>
            RAJA JERALD
          </motion.h1>

          <motion.div className="hero-role" variants={itemVariants}>
            <span className="typing-text">{currentRole}</span>
            <span className="cursor">|</span>
          </motion.div>

          <motion.p className="hero-bio" variants={itemVariants}>
            Turning ideas into fast, scalable web applications using modern frontend and backend technologies. Passionate about creating exceptional user experiences.
          </motion.p>

          <motion.div className="hero-buttons" variants={itemVariants}>
            <motion.a
              href="/Raja_jerald__Resume_pdf.pdf"
              download="Raja_Jerald_Resume.pdf"
              className="btn-primary"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <Download size={20} />
              Download CV
            </motion.a>

            <motion.button
              className="btn-secondary"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollToSection('projects')}
            >
              View Projects
              <ArrowRight size={20} />
            </motion.button>
          </motion.div>

          <motion.div className="hero-social" variants={itemVariants}>
            <SocialLinks />
          </motion.div>
        </div>

        {/* Right Column - Profile Image */}
        <motion.div
          className="hero-right"
          variants={itemVariants}
        >
          <div className="profile-image-wrapper">
            <div className="profile-glow"></div>
            <img
              src={profilePhoto}
              alt="Raja Jerald"
              className="profile-image"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        onClick={() => scrollToSection('about')}
        style={{ cursor: 'pointer' }}
      >
        <div className="mouse"></div>
      </motion.div>
    </motion.div>
  )
}

export default Hero
