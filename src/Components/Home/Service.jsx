import React, { useState } from "react";
import "../../assets/CSS/Home/Service.css";  // Include CSS file for styling
import User from "../../assets/Images/users.png";
import Userss from "../../assets/Images/Userss.png";
import Outfit from "../../assets/Images/outfit.png";
import AIOutfit from "../../assets/Images/AI outfit.png";
import Styling from "../../assets/Images/Styling.png";
import Skills from "../../assets/Images/Skills.png";
import Language from "../../assets/Images/language.png";
import Branding from "../../assets/Images/Branding.png";
import Shopping from "../../assets/Images/Shopping.png";



const servicesData = [
  {
    title: "Personal AI Advisor",
    description: "Our platform categorizes users based on their age, profession, region & fashion preferences, ensuring personalized guidance and recommendations.",
    icon: Userss, // Personal AI icon
  },
  {
    title: "Second Opinion",
    description: "Our second opinion with AI-powered Image and Video Consultation service in which AI gets to analyze your photos and videos to provide suggestions.",
    icon: User, // Second Opinion icon
  },
  {
    title: "Outfit Coordination",
    description: "Our platform offers fashion advice on colors and trend recommendations based on client preferences and suitability for various occasions.",
    icon: Outfit, // Outfit Coordination icon
  },
  {
    title: "Generative AI Outfits",
    description: "Our generative AI-enabled outfits just designed for you. helps you as personal fashion designer in your pocket, creating outfits that suit your taste and the occasion.",
    icon: AIOutfit, 
  },
  {
    title: "Event Styling planner",
    description: "We offer personalized assistance for special events by curating appropriate outfits and accessories.",
    icon: Styling, 
  },
  {
    title: "Communication Skills",
    description: "improve your effectiveness in conversations, and leave a memorable impact in your personal and professional interactions.",
    icon: Skills, 
  },
  {
    title: "Body Language",
    description: "Enhance your posture, gestures, and presence, leaving a lasting impression in every social and professional encounter.",
    icon: Language, 
  },
  {
    title: "Personal Branding",
    description: "Define and enhance your personal brand with expert guidance for lasting impressions in both personal and professional spheres.",
    icon: Branding, 
  },
  {
    title: "Offline Shopping Help",
    description: "Enhance your in-store shopping with AI guidance. Get real-time fashion recommendations for a better shopping experience.",
    icon: Shopping, 
  },
];

const Service = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (index) => {
    setSelectedCard(index);
  };

  return (
    <div className="services-section">
      {/* Heading and Paragraph */}
      <div className="services-header">
        <div className="heaing-service">
        <h3>Best Services</h3>
        <h1>Top Categorised services for you...</h1>
        </div>
        <div className="heaing-para">
        <p>
          With cutting-edge technology, our service provides you with the tools and insights to look and feel your best, every day.
        </p>
        </div>
      </div>

      {/* Cards Section */}
      <div className="service">
        <div className="services-container">
          {servicesData.map((service, index) => (
          <div
            key={index}
            className={`service-card ${selectedCard === index ? "active" : ""}`}
            onClick={() => handleCardClick(index)}
          >
            <div className="icon">
              {/* <FontAwesomeIcon icon={service.icon} size="2x" /> */}
              <img src={service.icon} style={{width: "70%", height:"auto"}} />
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>

          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default Service;