import React from 'react';
import Main from "../../assets/Images/main.png";
import '../../assets/CSS/About/Aboutmain.css';

const HeroSection = () => {
  return (
    <div className="aboutContainer">
      <div className='design-Divs'></div>
      <div className="textSections">
        <h3>About Us</h3>
        <h1>"Who we are"</h1>
        <p>Eveo is a groundbreaking AI-AR platform dedicated to transforming the way individuals curate their personas for events and functions. Our user-friendly virtual assistant and real-time simulations redefine the fashion and personal styling experience, offering tailored.</p>
      </div>
      <div className="imageSections">
        {/* Replace the following path with the actual image path */}
        <img src={Main} alt="AI Fashion Interaction" />
      </div>
    </div>
  )
}

export default HeroSection;