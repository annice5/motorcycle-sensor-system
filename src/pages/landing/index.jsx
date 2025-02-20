import About from "./components/about"
import Company from "./components/company"
import Contact from "./components/contact"
import Footer from "./components/footer"
import Hero from "./components/hero"
import Services from "./components/services"


const Landing = () => {
  return (
    <div>
      
      <Hero/>
      <About/>
      <Company/>
      <Services/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Landing