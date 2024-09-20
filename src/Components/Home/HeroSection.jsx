import React from 'react';
import image from "../../assets/Images/image.png";
import '../../assets/CSS/Home/HeroSection.css';

const HeroSection = () => {
  return (
    <div className="home-container">
      <div className='designDiv'></div>
      <div className="text-area">
        <h1>"Step into the Future of AI Fashion Stylist with Eveo"</h1>
        <p>Eveo empowers users to find their perfect style, embrace sustainable choices, and enhance confidence, revolutionizing fashion advice in the digital era.</p>
        <button className="cta-button">Let's Talk</button>
      </div>
      <div className="image-section">
        {/* Replace the following path with the actual image path */}
        <img src={image} alt="AI Fashion Interaction" />
      </div>
    </div>
  )
}

export default HeroSection;