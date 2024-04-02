import { Scroll } from "@react-three/drei"
import About from "./components/About"
import Aurora from "./components/Aurora"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Services from "./components/Services"


function App() {

  return (
    <>
      <Aurora />
      <Header />
      <Hero />
      <About />
      <Services/>
    </>
  )
}

export default App
