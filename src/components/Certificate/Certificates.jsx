import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Certficates.scss'

const certificates = [
  { id: 1, image: "src/images/FullStack.png", title: 'Full Stack Web Development' },
  { id: 2, image: "src/images/ReactJs.png", title: 'React Js' },
  { id: 3, image: "src/images/DesignPatterns.png", title: 'Design Patterns' },
  { id: 4, image: "src/images/CSSSelectors.png", title: 'CSS Selectors' },
  { id: 5, image: "src/images/GitAndGitHub.png", title: 'Git And GitHub' },
  { id: 6, image: "src/images/SocialMediaMarketing.png", title: 'Social Media Marketing' },
  { id: 7, image: "src/images/WordpressEcommerce.png", title: 'Wordpress Ecommerce' },
  { id: 8, image: "src/images/Markdown.png", title: 'Markdown' },
  { id: 9, image: "src/images/GitEssential.png", title: 'Git Essential' },
  { id: 10, image: "src/images/Linux.png", title: 'Linux' },
  { id: 11, image: "src/images/PythonObjectOriented.png", title: 'Python Object Oriented' },
  { id: 12, image: "src/images/PHPWithMySQL.png", title: 'PHP with MySQL' },
  { id: 13, image: "src/images/Algorithms.png", title: 'Algorithms' },
  { id: 14, image: "src/images/PHP.png", title: 'PHP' },




 
];

const CertificateSlider = () => {
    const sliderSettings = {
        dots: true,
        arrows:true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true, 
        draggable: true,
        fade: true,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
            },
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
            },
          },
        ],
      };
    
    return (
      <div className="certificate-slider-container">
        <div className="certificate-slider-card">
          <Slider {...sliderSettings}>
            {certificates.map((certificate) => (
              <div key={certificate.id} className="certificate-item">
                <img src={certificate.image} alt={certificate.title} />
                <div className="certificate-title">{certificate.title}</div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
  };
  
  export default CertificateSlider;