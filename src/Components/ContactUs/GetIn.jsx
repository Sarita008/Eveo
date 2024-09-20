import React from 'react';
import '../../assets/CSS/ContactUs/GetIn.css';  // Assuming you're using an external CSS file
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { GrLocation } from "react-icons/gr";

const GetIn = () => {
  return (
    <div className="get-in-touch-container">
      {/* Main Div */}
      <div className="sub-container">
        
        {/* Subdiv 1: Google Map */}
        <div className="map-section">
          <iframe
            className="google-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.1912361596714!2d144.9631573151328!3d-37.81400027975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5777b7b012fb22c!2sFederation%20Square!5e0!3m2!1sen!2sin!4v1633642731897!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            title="Google Map"
          ></iframe>
        </div>

        {/* Subdiv 2: Text Section */}
        <div className="text-section">
          <h2 className="heading">Let's talk</h2>
          <h3 className="subheading">Get in touch with us!</h3>
          <p className="description">
            Have questions or feedback? We're just a click away. 
            Reach out to us and let's chat about all things style.
          </p>

          <div className="contact-info">
            <p className="contact-item">
              <IoCallOutline className="icons" /> Free +0261 3177919
            </p>
            <p className="contact-item">
              <MdOutlineMailOutline className="icons" /> info@eveo.in
            </p>
            <p className="contact-item">
              <GrLocation className="icons" /> G 103-104, Silver Business Point, VIP Circle, Utran, Surat
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default GetIn;
