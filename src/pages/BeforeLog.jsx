import React from 'react';
import Navbar from '../component/Navbar';
import LoggedHome from '../component/LoggedHome';
import Features from '../component/Features';
import About from '../component/About';
import SendInquiry from '../component/SendInquiry';
import IconeLine from '../component/IconeLine';
import Footer from '../component/Footer';
import Home from '../component/Home';
import BeforeNav from '../component/BeforeNav';

const BeforeLog = () => {
  return (
    <>
    <BeforeNav/>
      <Home/>
      <Features />
      <About />
     
      <IconeLine />
      <Footer />
    </>
  );
};

export default BeforeLog;
