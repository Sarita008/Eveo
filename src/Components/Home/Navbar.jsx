import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/CSS/Home/Navbar.css';
import Logo from "../../assets/Images/logo.png";

const Navbar = () => {
  // State to track the active navigation item
  const [activeNav, setActiveNav] = useState('Home');

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={Logo} alt="Eveo Logo" />
      </div>
      <div className='NavLinksDiv'>
        <ul className="nav-links">
          <li>
            <Link 
              to="/" 
              className={activeNav === 'Home' ? 'active' : ''} 
              onClick={() => setActiveNav('Home')}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className={activeNav === 'About' ? 'active' : ''} 
              onClick={() => setActiveNav('About')}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link 
              to="/career" 
              className={activeNav === 'Career' ? 'active' : ''} 
              onClick={() => setActiveNav('Career')}
            >
              Career
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className={activeNav === 'Contact' ? 'active' : ''} 
              onClick={() => setActiveNav('Contact')}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;