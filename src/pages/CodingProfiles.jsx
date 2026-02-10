import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code2, Award, Target, TrendingUp } from 'lucide-react'
import './CodingProfiles.css'

function CodingProfiles({ pageVariants }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const profiles = [
    {
      name: 'LeetCode',
      icon: Code2,
      url: 'https://leetcode.com/u/jeraldraja/',
      color: '#ffa116',
      stats: '100+ Problems Solved',
      description: 'Practice data structures and algorithms'
    },
    // {
    //   name: 'HackerRank',
    //   icon: Target,
    //   url: 'https://hackerrank.com',
    //   color: '#00ea64',
    //   stats: '30+ Certificates',
    //   description: 'Competitive programming challenges'
    // },
    {
      name: 'skillrack',
      icon: TrendingUp,
      url: 'https://www.skillrack.com/faces/resume.xhtml?id=474784&key=7d3d05cd7f71d7821a305bc45e193c4c1ad23940',
      color: '#5b8db8',
      stats: '700+ Problems Solved',
      description: 'Participate in coding contests'
    },
    {
      name: 'GeeksForGeeks',
      icon: Award,
      url: 'https://www.geeksforgeeks.org/profile/jeraldraja72zq?tab=activity',
      color: '#2f8d46',
      stats: '200+ Articles',
      description: 'Learn and contribute to tech community'
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
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.6,
        type: 'spring',
        stiffness: 100
      }
    }
  }

  return (
    <motion.div
      className="coding-profiles-page"
      data-section="codingprofiles"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="coding-profiles-overlay"></div>

      <div className="coding-profiles-container" ref={ref}>
        <motion.h1
          className="coding-profiles-title"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Coding <span className="gradient-text">Profiles</span>
        </motion.h1>

        <motion.div
          className="coding-profiles-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {profiles.map((profile, index) => {
            const Icon = profile.icon
            return (
              <motion.a
                key={profile.name}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="coding-profile-card"
                variants={itemVariants}
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                  y: -10
                }}
                whileTap={{ scale: 0.95 }}
                style={{
                  '--profile-color': profile.color
                }}
              >
                <motion.div
                  className="profile-icon-wrapper"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon size={60} className="profile-icon" style={{ color: profile.color }} />
                  <motion.div
                    className="profile-icon-glow"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0.8, 0.5]
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 2,
                      delay: index * 0.2
                    }}
                  />
                </motion.div>

                <h3 className="profile-name">{profile.name}</h3>
                <p className="profile-stats">{profile.stats}</p>
                <p className="profile-description">{profile.description}</p>

                <motion.div
                  className="profile-glow"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            )
          })}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default CodingProfiles

