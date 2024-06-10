import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import About from "./component/About";
import ContactUs from "./pages/ContactUs";
import Features from "./component/Features";
import Footer from "./component/Footer";
import IconeLine from "./component/IconeLine";
import SendInquiry from "./component/SendInquiry";
import LoggedHome from "./component/LoggedHome";
import Navbar from "./component/Navbar";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Tapping from "./pages/Tapping";
import Bills from "./pages/Bills";
import TermsAndConditions from "./pages/TermsAndConditions";
import LandingPage from "./pages/landingpage";
import BeforeLog from "./pages/BeforeLog";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BeforeLog />} />
        <Route path="/LandingPage" element={<LandingPage />} />
        <Route path="/About" element={<About />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Features" element={<Features />} />
        <Route path="/Footer" element={<Footer />} />
        <Route path="/IconeLine" element={<IconeLine />} />
        <Route path="/SendInquiry" element={<SendInquiry />} />
        <Route path="/LoggedHome" element={<LoggedHome />} />   
        <Route path="/Login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/Tapping" element={<Tapping />} />
        <Route path="/Bills" element={<Bills />} />
        <Route path="/TermsAndConditions" element={<TermsAndConditions />} />
      </Routes>
    </Router>
  );
}

export default App;
