import React from 'react'
import "../../assets/CSS/About/Vision.css";
import VisionImage from "../../assets/Images/Vision.png";

const Vision = () => {
    return (
        <div className="vision-container">
          <div className="vision-text">
            <h2>Our Vision</h2>
            <p>
              Eveo seamlessly blends cutting-edge AI into fashion, revolutionizing 
              personal style perception and engagement. Our innovation empowers users 
              to embrace sustainable, unique fashion preferences confidently, </p> 
              <br /> 
              <p>as we aspire to reshape the industry positioning Eveo as the premier AI advisor for 
              empowered self-expression.
            </p>
          </div>
          <div className="vision-image">
            <img src={VisionImage} alt="Our Vision" />
          </div>
        </div>
      );
    };

export default Vision;