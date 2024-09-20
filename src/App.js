import React from 'react';
import Navbar from './Components/Home/Navbar';
import EmailSection from './Components/Home/EmailSection';
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contact from "./Components/ContactUs/Contact";
import Career from "./Components/Career/Career";
import Footer from "./Components/Home/Footer";
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
        </Routes>
        <Footer />
        </BrowserRouter>
  );
}

export default App;