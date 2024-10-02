import React from 'react';
import Navbar from './Components/Home/Navbar';
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contact from "./Components/ContactUs/Contact";
import Career from "./Components/Career/Career";
import Footer from "./Components/Home/Footer";
import FooterServices from './Components/Home/FooterServices';
import Refund from './Components/Home/Refund';
import TermsAndConditions from './Components/Home/TermsAndConditions';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';


function App() {
  return (
        <BrowserRouter>
         <Navbar /> 
        <Routes> 
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/career" element={<Career/>} />
        <Route path='/footerServices' element ={<FooterServices />} />
        <Route path ="/refund" element={<Refund />}  />
        <Route path='/term-and-conditions' element={<TermsAndConditions />}  />
        </Routes>
        <Footer />
        </BrowserRouter>
  );
}

export default App;