import React, { useState } from "react";
import logo from "../assets/logo.png";
import { GrLanguage } from "react-icons/gr";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { link: "Home", path: "/" },
    { link: "Bills", path: "/Bills" },
    { link: "Tapping", path: "/Tapping" },
    { link: "Contact", path: "/ContactUs" },
    { link: "Terms & Conditions", path: "/TermsAndConditions" },
  ];

  return (
    <>
      <nav className="bg-white md:px-12 max-w-screen-2xl mx-auto text-primary fixed top-0 right-0 left-0">
        <div className="text-lg container mx-auto flex justify-between items-center font-medium">
          <div className="flex space-x items-center">
            <Link to="/" className="text-2xl font-semibold flex items-center space-x-6 text-primary">
              <img
                src={logo}
                alt="logo"
                className="inline-block items-center"
                style={{ width: "150px", height: "100px", marginRight: "4em" }}
              />
            </Link>
            <ul className="md:flex space-x-12 hidden">
              {navItems.map(({ link, path }) => (
                <li key={link}>
                  <Link to={path} className="block hover:text-gray-300">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-x-12 hidden md:flex items-center">
            <Link to="/" className="hidden lg:flex items-center hover:text-secondary">
              <GrLanguage className="mr-2" />
              Language
            </Link>
            {/* <Link to="/signup" className="bg-green py-2 px-4 transition-all duration-300 rounded hover:text-white hover:bg-dark_green">
              Sign up
            </Link> */}
          </div>
          <div className="md:hidden px-4">
            <button onClick={toggleMenu} className="text-white text-lg focus:outline-none focus:text-gray-300">
              {isMenuOpen ? (
                <FaTimes className="w-6 h-6 text-primary" />
              ) : (
                <FaBars className="w-6 h-6 text-primary text-lg" />
              )}
            </button>
          </div>
        </div>
      </nav>
      <div className={`space-y-4 px-4 pt-24 pb-5 bg-green text-lg ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
        {navItems.map(({ link, path }) => (
          <Link key={link} to={path} className="block hover:text-gray-300">
            {link}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Navbar;
