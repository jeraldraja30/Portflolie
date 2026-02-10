import { motion } from 'framer-motion'
import { Linkedin, Github, Instagram, Youtube, Twitter } from 'lucide-react'
import './SocialLinks.css'

const socialLinks = [
  { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/rajajerald/', color: '#0077b5' },
  { name: 'GitHub', icon: Github, url: 'https://github.com/jeraldraja30', color: '#ffffff' },
  { name: 'Instagram', icon: Instagram, url: 'https://instagram.com/jeraldraja_2006?igshid=OGQ5ZDc2ODk=', color: '#e4405f' },
  // { name: 'YouTube', icon: Youtube, url: 'https://youtube.com', color: '#ff0000' },
  // { name: 'Twitter', icon: Twitter, url: 'https://twitter.com', color: '#1da1f2' }
]

function SocialLinks({ variant = 'default' }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  }

  return (
    <motion.div
      className={`social-links ${variant}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {socialLinks.map((social) => {
        const Icon = social.icon
        return (
          <motion.a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            variants={itemVariants}
            whileHover={{
              scale: 1.1,
              y: -3
            }}
            whileTap={{ scale: 0.95 }}
            style={{
              '--social-color': social.color
            }}
          >
            <Icon size={24} />
            <motion.div
              className="social-glow"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
        )
      })}
    </motion.div>
  )
}

export default SocialLinks

