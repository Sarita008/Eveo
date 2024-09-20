import React from 'react';
import ContactUs from "../ContactUs/ContactUs";
import GetIn from "../ContactUs/GetIn";
import ContactForm from "../ContactUs/ContactForm";
import EmailSection from '../Home/EmailSection';

const Home = () => {
  return (
    <>
      <ContactUs />
      <GetIn />
      <ContactForm />
      <EmailSection />
    </>
  );
};

export default Home;
