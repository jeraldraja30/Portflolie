import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Download, FileText, Award, Briefcase, GraduationCap } from 'lucide-react'
import './Resume.css'

function Resume({ pageVariants }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })


  // const experiences = [
  //   {
  //     icon: Briefcase,
  //     title: 'Senior Full Stack Developer',
  //     company: 'Tech Company',
  //     period: '2021 - Present',
  //     description: 'Leading development of scalable web applications using React, Node.js, and cloud technologies.'
  //   },
  //   {
  //     icon: Briefcase,
  //     title: 'Full Stack Developer',
  //     company: 'Startup Inc',
  //     period: '2019 - 2021',
  //     description: 'Developed and maintained multiple web applications with focus on performance and user experience.'
  //   },
  //   {
  //     icon: Briefcase,
  //     title: 'Junior Developer',
  //     company: 'Dev Agency',
  //     period: '2017 - 2019',
  //     description: 'Built responsive websites and learned modern web development practices.'
  //   }
  // ]
  const experiences = [
  {
    icon: Briefcase,
    title: 'Python Full Stack Development Intern',
    company: 'Jorim Technology Solutions',
    period: 'Nov 2025 – Jan 2026',
    location: 'Pammal, Chennai',
    description: [
  'Built full-stack modules using Django (MTV), HTML, CSS, JavaScript, and PostgreSQL, reducing manual admin work by 30% through automation.',
  'Created secure REST APIs with Django REST Framework using JWT/Token authentication for reliable CRUD operations.',
  'Integrated React with Django using Axios/Fetch and Git/GitHub workflows, cutting repeated UI code by 40% with reusable components.'
]
  }
];


  // const education = [
  //   {
  //     icon: GraduationCap,
  //     degree: 'Bachelor of Science in Computer Science',
  //     school: 'University Name',
  //     period: '2013 - 2017'
  //   }
  // ]

  const education = [
  {
    icon: GraduationCap,
    degree: 'B.Tech in Computer Science and Business Systems',
    school: 'Rajalakshmi Institute of Technology',
    location: 'Chennai',
    period: 'Sep 2022 – May 2027'
  },
  {
    icon: GraduationCap,
    degree: 'Higher Secondary Education',
    school: 'Montfort Matric Higher Secondary School',
    location: 'Tindivanam',
    period: 'Jun 2022 – Apr 2023'
  }
];


  return (
    <motion.div
      className="resume-page"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="resume-overlay"></div>

      <div className="resume-container" ref={ref}>
        <motion.div
          className="resume-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.h1 className="resume-title">
            My <span className="gradient-text">Resume</span>
          </motion.h1>

          <motion.a
            href="/Raja_jerald__Resume_pdf.pdf"
            download="Raja_Jerald_Resume.pdf"
            className="download-button"
            whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(99, 102, 241, 0.5)' }}
            whileTap={{ scale: 0.95 }}
          >
            <Download size={24} />
            Download Resume
            <motion.div
              className="button-glow"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{
                repeat: Infinity,
                duration: 2
              }}
            />
          </motion.a>
        </motion.div>

        <div className="resume-content">
          <motion.section
            className="resume-section"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="section-title">
              <Briefcase size={28} />
              Experience
            </h2>
            <div className="timeline">
              {experiences.map((exp, index) => {
                const Icon = exp.icon
                return (
                  <motion.div
                    key={index}
                    className="timeline-item"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    <div className="timeline-icon">
                      <Icon size={24} />
                    </div>
                    <div className="timeline-content">
                      <h3>{exp.title}</h3>
                      <h4>{exp.company}</h4>
                      <span className="timeline-period">{exp.period}</span>
                      <p>{exp.description}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.section>

          <motion.section
            className="resume-section"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="section-title">
              <GraduationCap size={28} />
              Education
            </h2>
            <div className="timeline">
              {education.map((edu, index) => {
                const Icon = edu.icon
                return (
                  <motion.div
                    key={index}
                    className="timeline-item"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: index * 0.1 + 0.5 }}
                  >
                    <div className="timeline-icon">
                      <Icon size={24} />
                    </div>
                    <div className="timeline-content">
                      <h3>{edu.degree}</h3>
                      <h4>{edu.school}</h4>
                      <span className="timeline-period">{edu.period}</span>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.section>
        </div>
      </div>
    </motion.div>
  )
}

export default Resume

