import React from 'react';
import Contact from "../../assets/Images/ContactUs.png";
import '../../assets/CSS/ContactUs/ContactUs.css';

const ContactUs = () => {
  return (
    <div className="about-container">
      <div className='designDivs'></div>
      <div className="text-sections">
        <h3>Contact Us</h3>
        <h1>let’s connect today!</h1>
        <p>Our AI-enabled fashion stylist platform is your ultimate destination for personalized style advice and trend-setting recommendations. By connecting with us, you'll unlock a world of possibilities.</p>
      </div>
      <div className="image-sections">
        {/* Replace the following path with the actual image path */}
        <img src={Contact} alt="AI Fashion Interaction" />
      </div>
    </div>
  )
}

export default ContactUs;