import React from 'react'
import "../../assets/CSS/About/Mission.css";
import Target from "../../assets/Images/Target.png";

const Mission = () => {
    return (
        <div className="mission-container">
          <div className="mission-image">
            <img src={Target} alt="Our Mission" />
          </div>

          <div className="mission-text">
            <h2>Our Mission</h2>
            <p>
              We’re on a mission to empower individuals in expressing their uniqueness 
              through AI-driven fashion suggestions. Seamlessly fusing cutting-edge AI 
              with fashion, our aim is to democratize and make fashion sustainable and enjoyable.
            </p>
            <br />
            <p>
              Our ultimate goal is to revolutionize fashion guidance for the digital age, 
              redefining how people approach personal style choices.
            </p>
          </div>
        </div>
      );
    };

export default Mission