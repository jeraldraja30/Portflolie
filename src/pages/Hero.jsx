import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import ThreeScene from '../components/ThreeScene'
import SocialLinks from '../components/SocialLinks'
import './Hero.css'

function Hero({ pageVariants }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  }

  return (
    <motion.div
      className="hero-page"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <ThreeScene />
      <div className="hero-overlay"></div>
      
      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 className="hero-name" variants={itemVariants}>
          Hi, I'm <span className="gradient-text">RAJA JERALD</span>
        </motion.h1>
        
        <motion.h2 className="hero-title" variants={itemVariants}>
          Full Stack Developer
        </motion.h2>
        
        <motion.p className="hero-tagline" variants={itemVariants}>
          Turning ideas into fast, scalable web applications using modern frontend and backend technologies
        </motion.p>
        
        <motion.div className="hero-cta" variants={itemVariants}>
          <motion.button
            className="cta-button"
            whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(99, 102, 241, 0.4)' }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/projects">
              View My Work
              <ArrowRight size={20} />
            </Link>
          </motion.button>
          
          <motion.button
            className="cta-button secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/contact">Hire Me</Link>
          </motion.button>
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <SocialLinks />
        </motion.div>
      </motion.div>
      
      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="mouse"></div>
      </motion.div>
    </motion.div>
  )
}

export default Hero

