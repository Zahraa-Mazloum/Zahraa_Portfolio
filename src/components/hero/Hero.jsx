import React, { useState, useEffect } from "react";
import Typed from 'react-typed';
import "./Hero.scss";
import {motion} from "framer-motion"
import { LuGithub ,LuLinkedin ,LuPhone} from "react-icons/lu";
import { BsWhatsapp } from "react-icons/bs";
 
const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-720%",
    transition: {
      repeat: Infinity,
      repeatType:"mirror",
      duration: 15,
    },
  },
};

const Hero = () => {


  const typedStrings = ["Full Stack Developer ", "Monitoring Specialist", "Wordpress Developer" ,"Data Officer"];

  
  return (
    <div className="hero">
      <div className="wrapper">
      <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >        <h3>Welcome to my portfolio</h3>
        <h1>Hello I am Zahraa a <span><Typed
      strings={typedStrings}
      typeSpeed={100}
      startDelay={0}
      backSpeed={60}
      backDelay={2000}
      loop={true}
      cursorChar="|"
      contentType='html'
    /></span>
        
        </h1>
     
        <div className='social'>
  <a href="https://github.com/Zahraa-Mazloum" target='_blank' rel="noopener noreferrer"> <LuGithub /> </a>
  <a href="https://www.linkedin.com/in/zahraa-mazloum/" target='_blank' rel="noopener noreferrer"> <LuLinkedin /> </a>
  <a href="https://wa.me/81474846"><BsWhatsapp /></a>
</div>

        <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="src/images/scroll.png"
            alt=""
            className="scroll"
          />      </motion.div>
  <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      > I design and develop responsive websites that are easy on the eyes and user friendly
      </motion.div>
      </div>
      <div className="imageContainer">
        <img src="src/images/Zahraa.png" className="heroImg" alt="Zahraa" />
      </div>
    </div>
   
  );
};

export default Hero;
