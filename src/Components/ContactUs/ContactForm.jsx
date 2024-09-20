import React from 'react';
import '../../assets/CSS/ContactUs/ContactForm.css';

const ContactForm = () => {
  return (
    <div className="contactUS-main-container">
      {/* Subdiv 1: Text Section */}
      <div className="textSection">
        <h2 className="heading">Contact Us</h2>
        <h3 className="subheading">Request A Call Back!</h3>
      </div>

      {/* Subdiv 2: Contact Form Section */}
      <div className="form-section">
        <form className="contact-form">
          <div className="form-row">
            <input type="text" placeholder="Your Name" className="form-input" />
            <input type="email" placeholder="Email Address" className="form-input" />
          </div>
          <div className="form-row">
            <input type="text" placeholder="Phone Number" className="form-input" />
            <input type="text" placeholder="Subject" className="form-input" />
          </div>
          <div className="form-row">
            <textarea placeholder="Message..." className="form-message"></textarea>
          </div>
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
