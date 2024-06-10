import serviceImg from "../assets/services.png";
import { motion } from "framer-motion";

import { fadeIn } from "../variants";

const About = () => {
  return (
    <div className="md:px-14 p-4 max-w-s mx-auto ">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
      <motion.div 
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, ammount: 0.7 }}
        className="lg:w-1/2">
          <img src={serviceImg} alt="" />
        </motion.div>

        <motion.div 
           variants={fadeIn("left", 0.2)}
           initial="hidden"
           whileInView={"show"}
           viewport={{ once: false, ammount: 0.7 }}
        className="md:w-2/5">
          <h2 className="md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal">
            Services
          </h2>
          <p className="text-tartiary md:text-2xl mb-7" >
            Discover trust and reliability with Lalan Rubbers'
             customer-centric
            services. From seamless orders to timely delivery, we prioritize
            your satisfaction. Our dedicated support team ensures prompt
            assistance. Trust in our expertise and commitment to excellence; let
            us exceed your expectations every step of the way
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
