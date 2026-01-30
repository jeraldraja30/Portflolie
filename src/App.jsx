import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navigation from './components/Navigation'
import Hero from './pages/Hero'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Resume from './pages/Resume'
import CodingProfiles from './pages/CodingProfiles'
import Contact from './pages/Contact'

function AppRoutes() {
  const location = useLocation()

  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20,
      scale: 0.98
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 1.02,
      transition: {
        duration: 0.3
      }
    }
  }

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Hero pageVariants={pageVariants} />} />
        <Route path="/about" element={<About pageVariants={pageVariants} />} />
        <Route path="/skills" element={<Skills pageVariants={pageVariants} />} />
        <Route path="/projects" element={<Projects pageVariants={pageVariants} />} />
        <Route path="/resume" element={<Resume pageVariants={pageVariants} />} />
        <Route path="/coding-profiles" element={<CodingProfiles pageVariants={pageVariants} />} />
        <Route path="/contact" element={<Contact pageVariants={pageVariants} />} />
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  return (
    <Router>
      <Navigation />
      <AppRoutes />
    </Router>
  )
}

export default App

