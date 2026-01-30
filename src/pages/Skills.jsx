import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code2, Database, Palette, Smartphone, Cloud, Cpu } from 'lucide-react'
import './Skills.css'

function Skills({ pageVariants }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: 'Python', icon: Code2, level: 90, color: '#3776ab' },
        { name: 'Java', icon: Code2, level: 85, color: '#e76f00' },
        { name: 'C', icon: Code2, level: 75, color: '#555555' },
        { name: 'JavaScript', icon: Code2, level: 88, color: '#f7df1e' },
      ]
    },
    {
      title: "Frontend",
      skills: [
        { name: 'React', icon: Code2, level: 80, color: '#61dafb' },
        { name: 'HTML', icon: Code2, level: 90, color: '#e34f26' },
        { name: 'CSS', icon: Code2, level: 85, color: '#1572b6' },
        { name: 'Bootstrap', icon: Palette, level: 82, color: '#7952b3' },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: 'Django', icon: Code2, level: 88, color: '#092e20' },
        { name: 'Node.js', icon: Code2, level: 80, color: '#339933' },
        { name: 'Express.js', icon: Code2, level: 78, color: '#000000' },
        { name: 'REST API', icon: Cloud, level: 85, color: '#0ea5e9' },
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: 'MySQL', icon: Database, level: 85, color: '#4479a1' },
        { name: 'PostgreSQL', icon: Database, level: 80, color: '#336791' },
      ]
    },
    {
      title: "Tools",
      skills: [
        { name: 'Git', icon: Code2, level: 90, color: '#f05032' },
        { name: 'GitHub', icon: Code2, level: 88, color: '#181717' },
        { name: 'Postman', icon: Code2, level: 82, color: '#ff6c37' },
        { name: 'VS Code', icon: Code2, level: 90, color: '#007acc' },
      ]
    },
    {
      title: "Concepts",
      skills: [
        { name: 'DSA', icon: Cpu, level: 82, color: '#6b7280' },
        { name: 'OOP', icon: Cpu, level: 85, color: '#4b5563' },
        { name: 'DBMS', icon: Database, level: 80, color: '#374151' }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const categoryVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  return (
    <motion.div
      className="skills-page"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="skills-overlay"></div>

      <div className="skills-container" ref={ref}>
        <motion.h1
          className="skills-title"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Technical <span className="gradient-text">Skills</span>
        </motion.h1>

        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              className="skill-category-card"
              variants={categoryVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <h2 className="category-title">{category.title}</h2>
              <div className="category-content">
                {category.skills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <div key={skill.name} className="skill-item">
                      <div className="skill-info">
                        <div className="skill-header">
                          <Icon size={20} style={{ color: skill.color }} />
                          <span className="skill-name">{skill.name}</span>
                        </div>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      <div className="skill-progress">
                        <motion.div
                          className="skill-progress-bar"
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1.5, delay: 0.5 + (index * 0.1), ease: "circOut" }}
                          style={{
                            background: `linear-gradient(90deg, ${skill.color}, ${skill.color}88)`,
                            boxShadow: `0 0 10px ${skill.color}66`
                          }}
                        />
                      </div>
                    </div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Skills

