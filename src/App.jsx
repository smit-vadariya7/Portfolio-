import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import Tools from './components/Tools'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-[var(--color-primary-bg)] min-h-screen relative font-sans text-[var(--color-secondary-text)]">
      <div className="relative z-10 bg-transparent">
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <Tools />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App
