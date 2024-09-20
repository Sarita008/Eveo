import React from 'react';
import Join from "../../assets/Images/JoinUs.png";
import '../../assets/CSS/Career/JoinUs.css';

const JoinUs = () => {
  return (
    <div className="mainJoinus">
      <div className="JoinUs-container">
        <div className='designDivs'></div>
        <div className="text-sections">
          <h3>Join Us</h3>
          <h1>"Shape the Future of AI Fashion with Us"</h1>
          <p>Join our team and become part of a cutting-edge, AI-driven fashion revolution. As a member of our innovative crew, you'll have the opportunity to-</p>
        </div>
        <div className="image-sections">
          {/* Replace the following path with the actual image path */}
          <img src={Join} alt="AI Fashion Interaction" />
        </div>
      </div>
    </div>
  )
}

export default JoinUs;