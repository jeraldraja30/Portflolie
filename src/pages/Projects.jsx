import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Github, ExternalLink, Code2 } from 'lucide-react'
import './Projects.css'

function Projects({ pageVariants }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with payment integration, inventory management, and real-time analytics.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      thumbnail: 'https://via.placeholder.com/400x250/6366f1/ffffff?text=E-Commerce'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management tool with drag-and-drop, real-time updates, and team collaboration features.',
      tech: ['React', 'TypeScript', 'Firebase', 'Framer Motion'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      thumbnail: 'https://via.placeholder.com/400x250/f5576c/ffffff?text=Task+Manager'
    },
    {
      title: '3D Portfolio Website',
      description: 'An immersive 3D portfolio website with interactive models, particle systems, and smooth animations.',
      tech: ['React', 'Three.js', 'Framer Motion', 'GSAP'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      thumbnail: 'https://via.placeholder.com/400x250/00f2fe/ffffff?text=3D+Portfolio'
    },
    {
      title: 'Social Media Dashboard',
      description: 'Comprehensive analytics dashboard for social media metrics with data visualization and insights.',
      tech: ['React', 'Python', 'PostgreSQL', 'Chart.js'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      thumbnail: 'https://via.placeholder.com/400x250/f093fb/ffffff?text=Dashboard'
    },
    {
      title: 'Fitness Tracking App',
      description: 'Mobile-first fitness tracking application with workout plans, progress tracking, and social features.',
      tech: ['React Native', 'Node.js', 'MongoDB', 'GraphQL'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      thumbnail: 'https://via.placeholder.com/400x250/4facfe/ffffff?text=Fitness+App'
    },
    {
      title: 'AI Image Generator',
      description: 'AI-powered image generation tool using machine learning models with style transfer and customization.',
      tech: ['React', 'Python', 'TensorFlow', 'FastAPI'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      thumbnail: 'https://via.placeholder.com/400x250/764ba2/ffffff?text=AI+Generator'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  }

  return (
    <motion.div
      className="projects-page"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="projects-overlay"></div>
      
      <div className="projects-container" ref={ref}>
        <motion.h1
          className="projects-title"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          My <span className="gradient-text">Projects</span>
        </motion.h1>
        
        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="project-card"
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="project-thumbnail">
                <div className="project-image-placeholder">
                  <Code2 size={60} />
                </div>
                <div className="project-overlay">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Github size={24} />
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ExternalLink size={24} />
                  </motion.a>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Projects

