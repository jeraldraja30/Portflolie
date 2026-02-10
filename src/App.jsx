import Navigation from './components/Navigation'
import ScrollContainer from './components/ScrollContainer'
import Hero from './pages/Hero'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Resume from './pages/Resume'
import CodingProfiles from './pages/CodingProfiles'
import Contact from './pages/Contact'

function App() {
  return (
    <>
      <Navigation />
      <ScrollContainer>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Resume />
        <CodingProfiles />
        <Contact />
      </ScrollContainer>
    </>
  )
}

export default App


