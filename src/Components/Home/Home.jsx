import React from 'react';
import HeroSection from '../Home/HeroSection';
import Service from "../Home/Service";
import Star from "../Home/Stars";
import Innovation from '../Home/Innovation';
import EmailSection from '../Home/EmailSection';
import "../../assets/CSS/Home/Home.css"
 

const Home = () => {
  return (
    <>
      <HeroSection/>
      <Service/>
      <Star/>
      <Innovation/>
      <EmailSection/>
    </>
  );
};

export default Home;
