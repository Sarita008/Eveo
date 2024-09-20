import React, { useEffect, useState } from "react";
import '../../assets/CSS/Home/Innovation.css';
import patna from "../../assets/Images/logo_IC IIT Patna 1.png";
import most from "../../assets/Images/MOST.png";
import iiml from "../../assets/Images/IIML.png";
import openai from "../../assets/Images/OPEN AI.png";
import gtu from '../../assets/Images/GTU.png';
import nvidia from "../../assets/Images/nvidia.png";
import meta from "../../assets/Images/meta.png";
import microsoftstartup from "../../assets/Images/Microsoft startup.png";
import zoho from "../../assets/Images/zoho.png";

const Innovation = () => {
//   const [positions, setPositions] = useState([
//     "pos1", "pos2", "pos3", "pos4", "pos5", "pos6", "pos7", "pos8"
//   ]);

//   const handleCircleClick = () => {
//     // Rotate the positions of the images in a circle
//     const newPositions = [...positions];
//     newPositions.unshift(newPositions.pop()); // Rotating array
//     setPositions(newPositions);
//   };

const radius = 300; // Updated radius of the main circle
const iconSize = 40; // Size of each icon (width and height)
const [positions, setPositions] = useState([]);

const icons = [patna,most,iiml,openai,gtu,nvidia,meta,microsoftstartup,zoho];
const totalIcons = icons.length;
const gap = 40; 

// Function to calculate and set positions for icons
const calculatePositions = () => {
  const newPositions = icons.map((_, index) => {
    const angle = (index / totalIcons) * 2 * Math.PI;
    const x = radius * Math.cos(angle) + radius - iconSize / 2;
    const y = radius * Math.sin(angle) + radius - iconSize / 2;
    return { x, y };
  });
  setPositions(newPositions);
};

// Function to randomly shuffle the positions
const randomizePositions = () => {
  const randomPositions = icons.map(() => {
    const randomAngle = Math.random() * 2 * Math.PI;
    const x = radius * Math.cos(randomAngle) + radius - iconSize / 2;
    const y = radius * Math.sin(randomAngle) + radius - iconSize / 2;
    return { x, y };
  });
  setPositions(randomPositions);
};

// Initial setup and randomization every 2 seconds
useEffect(() => {
  calculatePositions();
  const interval = setInterval(randomizePositions, 2000);

  return () => clearInterval(interval);
}, []);

  
  

  return (
    <div className="innovation-section">
      <div className="innovation-header">
        <div className="header-inno">
          <h2>Nurturing Innovation</h2>
          <h3>Where Supporters Foster Our Brand's Growth.</h3>
        </div>
        <div className="para-innov">
          <p>"We're honored to have the support of industry leaders and well-known brands who believe in our mission."</p>
        </div>
      </div>

      {/* <div className="circle-container" onClick={handleCircleClick}>
        <div className={`circle-item ${positions[0]}`}><img src={patna} alt="IIT Patna" /></div>
        <div className={`circle-item ${positions[1]}`}><img src={most} alt="Ministry" /></div>
        <div className={`circle-item ${positions[2]}`}><img src={iiml} alt="IIML" /></div>
        <div className={`circle-item ${positions[3]}`}><img src={openai} alt="OpenAI" /></div>
        <div className={`circle-item ${positions[4]}`}><img src={gtu} alt="GTU" /></div>
        <div className={`circle-item ${positions[5]}`}><img src={nvidia} alt="Nvidia" /></div>
        <div className={`circle-item ${positions[6]}`}><img src={meta} alt="Meta" /></div>
        <div className={`circle-item ${positions[7]}`}><img src={microsoftstartup} alt="Microsoft" /></div>
        <div className={`circle-item ${positions[8]}`}><img src={zoho} alt="Zoho" /></div>
      </div> */}
   <div className="container">
      <div className="circle">
        {positions.map((pos, index) => (
          <img
            key={index}
            className="icon"
            src={icons[index]}
            style={{
              left: `${pos.x}px`,
              top: `${pos.y}px`,
            }}
          />
        ))}
        {/* Adding concentric circles */}
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="concentric-circle"
            style={{ 
              width: `${radius * 2 - i * gap}px`, 
              height: `${radius * 2 - i * gap}px` 
            }}
          />
        ))}
      </div>
    </div>
    </div>
  );
};

export default Innovation;