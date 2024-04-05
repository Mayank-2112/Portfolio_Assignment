import { Scroll } from "@react-three/drei"
import About from "./components/About"
import Aurora from "./components/Aurora"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Services from "./components/Services"
import Skills from "./components/Skills"
import { Testimonials } from "./components/Testimonials"
import { Projects } from "./components/Projects"
import Experience from "./components/Experience"
import Education from "./components/Education"
import Contact from "./components/Contact"


function App() {

  return (
    <>
      <Aurora />
      <Header />
      <Hero />
      <About />
      <Services/>
      <Experience/>
      <Education/>
      <Skills/>
      <Projects/>
      <Testimonials/>
      <Contact/>
    </>
  )
}

export default App
