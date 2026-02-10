import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, Target, Rocket, Code } from 'lucide-react'
import SocialLinks from '../components/SocialLinks'
import './About.css'
import ProfilePhoto from '../assets/profile-photo11.jpg'

function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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

  const highlights = [
    { icon: Code, title: 'Full Stack Developer', description: 'Skilled in HTML, CSS, JavaScript, Node.js (Express), Java, and MySQL' },
    { icon: Target, title: 'DSA & Problem Solving', description: 'Strong foundation in data structures, algorithms, DFS, BFS, and optimization' },
    { icon: Rocket, title: 'Project-Based Learning', description: 'Built end-to-end web applications and management systems with real use cases' },
    { icon: Award, title: 'Secure Coding', description: 'Aware of OWASP Top 10 vulnerabilities and secure application practices' }
  ]

  //   const highlights = [
  //   {
  //     icon: Code,
  //     title: 'Full Stack Developer',
  //     description: 'Skilled in HTML, CSS, JavaScript, Node.js (Express), Java, and MySQL'
  //   },
  //   {
  //     icon: Target,
  //     title: 'DSA & Problem Solving',
  //     description: 'Strong foundation in data structures, algorithms, DFS, BFS, and optimization'
  //   },
  //   {
  //     icon: Rocket,
  //     title: 'Project-Based Learning',
  //     description: 'Built end-to-end web applications and management systems with real use cases'
  //   },
  //   {
  //     icon: Shield,
  //     title: 'Secure Coding',
  //     description: 'Aware of OWASP Top 10 vulnerabilities and secure application practices'
  //   }
  // ];


  return (
    <motion.div
      className="about-page"
      data-section="about"
    >
      <div className="about-overlay"></div>

      <div className="about-container" ref={ref}>
        <motion.div
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h1 className="about-title" variants={itemVariants}>
            About <span className="gradient-text">Me</span>
          </motion.h1>

          <div className="about-grid">
            <motion.div className="about-image-container" variants={itemVariants}>
              <div className="about-image">
                <img
                  src={ProfilePhoto}
                  alt="Profile"
                  className="profile-img"
                />
              </div>
              <motion.div
                className="image-glow"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3
                }}
              />
            </motion.div>

            <motion.div className="about-text" variants={itemVariants}>
              <p className="about-bio">
                I am a motivated Full Stack Developer with hands-on experience in building simple, responsive, and secure web applications. I have worked with HTML, CSS, and JavaScript for frontend development, and Node.js (Express), Java, and MySQL for backend development.
              </p>
              <p className="about-bio">
                I understand REST APIs, basic CRUD operations, and backend logic. I also have a good understanding of Data Structures and Algorithms such as arrays, linked lists, stacks, queues, trees, graphs, and basic problem-solving techniques like DFS and BFS.
              </p>
              <p className="about-bio">
                I follow basic secure coding practices and am familiar with common web security issues. I am looking for an entry-level Full Stack Developer role where I can learn, grow, and contribute to real-world projects.
              </p>
              <div className="about-skills-preview">
                <span>React</span>
                <span>Django</span>
                <span>MySQL</span>
                <span>Express</span>
                <span>Python</span>
                <span>java</span>

              </div>
            </motion.div>
          </div>

          <motion.div className="highlights-grid" variants={itemVariants}>
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon
              return (
                <motion.div
                  key={highlight.title}
                  className="highlight-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <Icon size={40} className="highlight-icon" />
                  <h3>{highlight.title}</h3>
                  <p>{highlight.description}</p>
                </motion.div>
              )
            })}
          </motion.div>

          <motion.div variants={itemVariants} style={{ marginTop: '4rem' }}>
            <SocialLinks />
          </motion.div>
        </motion.div>
      </div >
    </motion.div >
  )
}

export default About

