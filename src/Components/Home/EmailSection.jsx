import React from 'react';
import '../../assets/CSS/Home/EmailSection.css';

const EmailSection = () => {
  return (
    <div className='email-box'>
        <div className="email-container">
            <h1>“Ready to Get Started Join Eveo Today”</h1>
            <div className="email-input">
                <input type="email" placeholder="Enter your Email" />
                <button type="submit">Submit</button>
            </div>
            <div className="top-right-circle"></div>
            <div className="bottom-right-circle"></div>
        </div>
    </div>
  );
}

export default  EmailSection;
