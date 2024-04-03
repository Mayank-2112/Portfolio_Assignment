import { Scroll } from "@react-three/drei"
import About from "./components/About"
import Aurora from "./components/Aurora"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Services from "./components/Services"
import Skills from "./components/Skills"


function App() {

  return (
    <>
      <Aurora />
      <Header />
      <Hero />
      <About />
      <Services/>
      <Skills/>
    </>
  )
}

export default App
