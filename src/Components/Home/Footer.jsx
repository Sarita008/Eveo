// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';  // Import Link for navigation
import logo from '../../assets/Images/logo.png';
import '../../assets/CSS/Home/Footer.css'; 
import { FiSend } from "react-icons/fi";
import { FaFacebook, FaInstagram, FaTwitterSquare, FaLinkedin , } from "react-icons/fa";
import { PiHandPeace } from "react-icons/pi";
import { IoCallOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className='subFooterDiv1'>
          <div className="footer-section logo">
            <img src={logo}/>
            <p>At Eveo, we are trying to align the fashion according to your preference and under your budget by offering personalized guidance, using AI-AR to transform personality management for events.</p>
          </div>
          <div className="footer-section-info">
            <h2>Contact Us</h2>
            <p>< IoCallOutline /> +0261 3177919</p>
            <p> <MdEmail  /> info@eveo.in</p>
          </div>
          <div className="footer-section-info">
            <h2>Useful Links</h2>
            <ul>
              <li><Link to="/about">About us</Link></li>
              <li><Link to="/career">Career</Link></li>
              <li><Link to="/footerServices">Services</Link></li>
              <li>Policy</li>
              <li><Link to="/refund">Refund</Link></li> {/* Added Link to Refund page */}
              <li><Link to="/term-and-conditions">Terms & Conditions</Link></li>
            </ul>
          </div>
          <div className="footer-section-info">
            <h2>Let's Stay Connected</h2>
            <div className="email-inputs">
                <input type="email" placeholder="Your email address" />
                <button type="submit"><FiSend /></button>
            </div>
            <div className="social-icons">
              <h2> Join Us</h2>
              <FaInstagram className='icon-name'  />
              <FaFacebook className='icon-name'   />
              <FaTwitterSquare className='icon-name' />
              <FaLinkedin className='icon-name' />
              <PiHandPeace className='icon-name' />
            </div>
          </div>
        </div>
        <div className="subFooterDiv2">
          <div className='footer-section-info'>
            <h2> <CiLocationOn className='location-icon'  /> Surat(HQ)</h2>
            <p>G 103-104, Silver Business Point, VIP Circle, Uttran, Surat 394105</p>
          </div>
          <div className='footer-section-info'>
            <h2> <CiLocationOn className='location-icon'  /> Ahmedabad</h2>
            <p>Block no.3, LD Engg. college, Navrangpura, Ahmedabad-380009</p>
          </div>
          <div className='footer-section-info'>
            <h2> <CiLocationOn className='location-icon'  /> Patna</h2>
            <p>Room No. H, IC-IIIT, IIT Patna Campus, Bihta, Patna-801103</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        © 2023 Copyright by Eveo. All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
