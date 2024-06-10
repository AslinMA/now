import React from 'react';
import Navbar from '../component/Navbar';
import LoggedHome from '../component/LoggedHome';
import Features from '../component/Features';
import About from '../component/About';
import SendInquiry from '../component/SendInquiry';
import IconeLine from '../component/IconeLine';
import Footer from '../component/Footer';

const LandingPage = () => {
  return (
    <>
     <Navbar />
      <LoggedHome />
      <Features />
      <About />
      <SendInquiry />
      <IconeLine />
      <Footer />
    </>
  );
};

export default LandingPage;
