import React from 'react'

import {motion} from "framer-motion";
import "./Navbar.scss";
// import Sidebar from '../sidebar/Sidebar';


const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className='navbar'>
{/* Sidebar */}
{/* <Sidebar /> */}
<div className='wrapper'>
    <motion.span initial={{opacity:0, scale:0.5}} animate={{opacity:1,scale:1}} transition={{duration:0.5}}> <img src="src/images/ZMLOGO.png" className='logo'/> </motion.span>

    <div className='sections'>
    <a href="#" onClick={() => scrollToSection("Home")}>Home</a>
          <a href="#" onClick={() => scrollToSection("Projects")}>Projects</a>
          <a href="#" onClick={() => scrollToSection("Certificates")}>Certificates</a>
          <a href="#" onClick={() => scrollToSection("Skills")}>Skills</a>
          <a href="#" onClick={() => scrollToSection("Contact")}>Contact</a>
        </div>


    </div>   
</div>
    
  )
}

export default Navbar