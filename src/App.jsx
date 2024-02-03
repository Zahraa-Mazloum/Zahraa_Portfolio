import "./app.scss"
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/parallax";
import CertificateSlider from "./components/Certificate/Certificates";
import Portfolio from "./components/Portfolio/Portfolio";
import Skills from "./components/skills/skills";
import Contact from "./components/contact/Contact";

const App = () => {
  return <div>
    <section id="Home">
      <Navbar/>
      <Hero />
    </section>
    <section id="Services"> <Parallax type="services"/> </section>
    <section id="Certificates"><CertificateSlider /></section>
    <section id="Projects"> <Parallax type="portfolio"/> </section>
  <Portfolio />
  <section id="Skills"><Skills /></section> 

    <section id="Contact"><Contact /></section> 

  
  </div>;
};

export default App;
