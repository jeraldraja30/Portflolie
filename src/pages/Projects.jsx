import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Github, ExternalLink, Code2, ArrowUpRight } from 'lucide-react'
import './Projects.css'

import portfolioImg from '../assets/portfolio.png'
import smartHostelImg from '../assets/SmartHostel 360.png'
import devSphereImg from '../assets/DevSphere.png'
import taskManagementImg from '../assets/task-management.png'
import crmImg from '../assets/CRM.png'

function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const projects = [
    {
      title: 'SmartHostel 360',
      description: 'SmartHostel 360 is a modern web-based platform that automates and streamlines daily hostel operations using scalable, secure technologies.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express', 'MySQL'],
      github: 'https://github.com/jeraldraja30/SmartHostel-360',
      demo: 'https://github.com/jeraldraja30/SmartHostel-360',
      image: smartHostelImg
    },
    {
      title: '3D Portfolio Website',
      description: 'An immersive 3D portfolio website with interactive models, particle systems, and smooth animations.',
      tech: ['React', 'Three.js', 'Framer Motion', 'GSAP'],
      github: 'https://github.com/jeraldraja30/Portflolie',
      demo: 'https://jeraldraja.tech',
      image: portfolioImg,
      featured: true
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management tool with drag-and-drop, real-time updates, and team collaboration features.',
      tech: ['React', 'TypeScript', 'Firebase', 'Framer Motion'],
      github: 'https://github.com/jeraldraja30/Task-Management-App',
      demo: 'https://github.com/jeraldraja30/Task-Management-App',
      image: taskManagementImg
    },
    {
      title: 'DevSphere',
      description: 'Comprehensive analytics dashboard for social media metrics with data visualization and insights.',
      tech: ['Python', 'Django', 'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'MySQL'],
      github: 'https://github.com/jeraldraja30/Personal_Blogss',
      demo: 'https://github.com/jeraldraja30/Personal_Blogss',
      image: devSphereImg
    },
    {
      title: 'CRM (Customer Relationship Management System)',
      description: 'Developed a Customer Relationship Management system to streamline client interactions, task tracking, and team collaboration with real-time updates and an intuitive drag-and-drop interface.',
      tech: ['React', 'Django', 'mysql', 'Restapi'],
      github: 'https://github.com/jeraldraja30/CRM-',
      demo: 'https://github.com/jeraldraja30/CRM-',
      image: crmImg
    },
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
      data-section="projects"
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
              className={`project-card ${project.image ? 'has-image' : ''} ${project.featured ? 'featured' : ''}`}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {/* Background Image Layer */}
              <div className="project-thumbnail">
                {project.image ? (
                  <>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-thumbnail-image"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="project-image-gradient"></div>
                  </>
                ) : (
                  <div className="project-image-placeholder">
                    <Code2 size={60} />
                  </div>
                )}

                {/* Hover Overlay with Links */}
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

              {/* Content Layer */}
              <div className="project-content">
                <h3 className="project-name">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tech">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                {project.image && (
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-view-btn"
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Project <ArrowUpRight size={18} />
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Projects
