import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { FaHome, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import managerImg from "../assets/manager.png";
import executiveImg from "../assets/executive.png";
import supervisorImg from "../assets/supervisor.png";

const ContactUs = () => {
  return (
    <div className="md:px-14 px-4 max-w-screen-2xl mx-auto my-28">
      <motion.div
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="text-center lg:text-left mb-10"
      >
        <h2 className="text-5xl text-primary font-bold mb-10">CONTACT INFO</h2>
        <p className="text-xl text-tartiary mb-10">
          We are here to answer any questions you may have about us and what we
          do. Reach out and we’ll get back to you as soon as we can.
        </p>
        <div className="flex flex-col items-center lg:items-start gap-4 ">
          <div className="flex items-center">
            <FaHome className="text-primary mr-3" />
            <p className="text-xl text-tartiary">
              Address: No.95B, Zone A, EPZ, Biyagama, 11672, Sri Lanka
            </p>
          </div>
          <div className="flex items-center">
            <FaPhoneAlt className="text-primary mr-3" />
            <p className="text-xl text-tartiary">Phone: +94 11 2345678</p>
          </div>
          <div className="flex items-center">
            <FaEnvelope className="text-primary mr-3" />
            <p className="text-xl text-tartiary">
              Email: info@lalanrubbers.com
            </p>
          </div>
        </div>
      </motion.div>

      <div className=" w-full mx-auto">
        <div className="flex flex-col md:flex-row justify-center  items-center gap-8">
          {/* Manager Card */}
          <motion.div
           variants={fadeIn("right", 0.2)}
           initial="hidden"
           whileInView={"show"}
           viewport={{ once: false, amount: 0.7 }}
          >
            <div className="bg-[rgba(255,255,255,0.04)] rounded-[35px] shadow-3xl p-6 flex flex-col items-center text-center hover:translate-y-4 transition-all duration-300 cursor-pointer ">
              <img
                src={managerImg}
                alt="Manager"
                className="w-32 h-32 rounded-full mb-4"
              />
              <h3 className="text-2xl text-primary font-semibold mb-2">
                John Doe
              </h3>
              <p className="text-tartiary mb-1 font-semibold">Manager</p>
              <p className="text-tartiary mb-1">Phone: +94 71 2345678</p>
              <p className="text-tartiary break-words">
                Email: john.doe@lalanrubbers.com
              </p>
            </div>
          </motion.div>

          {/* Executive Card */}
          <motion.div 
           variants={fadeIn("left", 0.2)}
           initial="hidden"
           whileInView={"show"}
           viewport={{ once: false, amount: 0.7 }}
           >
          <div className="bg-[rgba(255,255,255,0.04)] rounded-[35px] shadow-3xl p-6 flex flex-col items-center text-center hover:translate-y-4 transition-all duration-300 cursor-pointer ">
            <img
              src={executiveImg}
              alt="Executive"
              className="w-32 h-32 rounded-full mb-4"
            />
            <h3 className="text-2xl text-primary font-semibold mb-2">
              Jane Smith
            </h3>
            <p className="text-tartiary mb-1 font-semibold">Executive</p>
            <p className="text-tartiary mb-1">Phone: +94 71 3456789</p>
            <p className="text-tartiary break-words">
              Email: jane.smith@lalanrubbers.com
            </p>
          </div>
          </motion.div>

        </div>
      
       <div className="flex flex-col md:flex-row justify-center  items-center gap-8 mt-10 m- ">
          {/* Supervisor Card */}
          <div className="bg-[rgba(255,255,255,0.04)] rounded-[35px] shadow-3xl p-6 flex flex-col items-center text-center hover:translate-y-4 transition-all duration-300 cursor-pointer">
            <img
              src={supervisorImg}
              alt="Supervisor"
              className="w-32 h-32 rounded-full mb-4"
            />
            <h3 className="text-2xl text-primary font-semibold mb-2">
              Mark Johnson
            </h3>
            <p className="text-tartiary mb-1">Supervisor</p>
            <p className="text-tartiary mb-1">Phone: +94 71 4567890</p>
            <p className="text-tartiary break-words">
              Email: mark.johnson@lalanrubbers.com
            </p>
          </div>
          <div className="bg-[rgba(255,255,255,0.04)] rounded-[35px] shadow-3xl p-6 flex flex-col items-center text-center hover:translate-y-4 transition-all duration-300 cursor-pointer">
            <img
              src={supervisorImg}
              alt="Supervisor"
              className="w-32 h-32 rounded-full mb-4"
            />
            <h3 className="text-2xl text-primary font-semibold mb-2">
              Mark Johnson
            </h3>
            <p className="text-tartiary mb-1">Supervisor</p>
            <p className="text-tartiary mb-1">Phone: +94 71 4567890</p>
            <p className="text-tartiary break-words">
              Email: mark.johnson@lalanrubbers.com
            </p>
          </div>
          <div className="bg-[rgba(255,255,255,0.04)] rounded-[35px] shadow-3xl p-6 flex flex-col items-center text-center hover:translate-y-4 transition-all duration-300 cursor-pointer">
            <img
              src={supervisorImg}
              alt="Supervisor"
              className="w-32 h-32 rounded-full mb-4"
            />
            <h3 className="text-2xl text-primary font-semibold mb-2">
              Mark Johnson
            </h3>
            <p className="text-tartiary mb-1">Supervisor</p>
            <p className="text-tartiary mb-1">Phone: +94 71 4567890</p>
            <p className="text-tartiary break-words">
              Email: mark.johnson@lalanrubbers.com
            </p>
          </div>
          
        </div>
      
      </div>
    </div>
  );
};

export default ContactUs;
