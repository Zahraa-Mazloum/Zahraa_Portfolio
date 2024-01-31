import { useRef } from "react"
import "./Portfolio.scss"
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
const items =[
    {
        id:1,
        title:"Dental Clinic",
        img:"src/images/dentalclinic.png",
        desc:"Dental Clinic Management System, a powerful project built using the MERN (MongoDB, Express.js, React, Node.js) stack. This comprehensive application streamlines the management of patient records, treatment progress, appointments, schedules, and clinic finances. Leveraging libraries like React Toastify, Big Calendar, and MUI, this project offers a user-friendly interface and robust functionality. With enhanced security measures, protected routes, and distinct user roles, the system ensures efficient collaboration between administrators and assistants.",
        link:"https://64589f1bce5d3200087194ae--bassam-monla.netlify.app/login"
    },
    {
        id:2,
        title:"Personal Portfolio",
        img:"src/images/PersonalPortfolio.png",
        desc:"This portfolio serves as a comprehensive display of the MERN (MongoDB, Express.js, React, Node.js) stack development, meticulous design, and captivating animations we have meticulously crafted for our esteemed client. In this project, we aimed to capture the essence of our client's vision by incorporating cutting-edge technology and implementing the latest industry trends. Our primary objective was to provide an immersive and user-friendly experience that not only highlights the client's offerings but also leaves a lasting impression on visitors.",
        link:"https://portfolio-frontend-seven-rho.vercel.app/"
    },
    {
        id:3,
        title:"Gym Management" ,
        img:"src/images/Gym.png",
        desc:"Our Gym Management Platform is a comprehensive and user-friendly solution designed to streamline and enhance the operations of your fitness center. This all-in-one web application combines membership tracking, financial management, class scheduling, and communication features to ensure the smooth functioning of your gym.",
        link:"https://gym-management-nine.vercel.app/login"
    },
   
]
const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  const handleDemoButtonClick = () => {
    window.open(item.link, "_blank");
  };


  return (
  <section ref={ref}>
    <div className="container">
      <div className="wrapper">
           <img src={item.img} alt=""/>

      <motion.div className="textContainer">
        <h2>{item.title}</h2>
        <p>{item.desc}</p>
        <button onClick={handleDemoButtonClick}>See Demo</button>

      </motion.div>
      </div>
      
          </div>
  </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;