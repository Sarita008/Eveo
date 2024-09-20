import React from 'react';
import Aboutmain from '../About/Aboutmain';
import Mission from "../About/Mission";
import Vision from "../About/Vision";
import WhyChooseUs from "../About/WhyChooseUs"
import EmailSection from '../Home/EmailSection';
 

const Home = () => {
  return (
    <>
      <Aboutmain/>
      <Mission />
      <Vision />
      <WhyChooseUs />
      <EmailSection />
    </>
  );
};

export default Home;
