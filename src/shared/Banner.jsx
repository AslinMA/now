import { motion } from "framer-motion";

import { fadeIn } from "../variants";
import { Link } from "react-router-dom";

const Banner = ({ banner, headding, subheading, btn1 }) => {
  return (
    <div className="gardientBg rounded-xl rounded-br-[80px] md:p-9 px-4 py-9">
      <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-10">
        {/* ===============================================================bennr image========================================= */}

        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, ammount: 0.7 }}
        >
          <img src={banner} alt="" className="lg:h-[386px] lg:w-[429px]" />
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, ammount: 0.7 }}
          className="md:w-3/5"
        >
          <h2 className="md:text-7xl text-4xl font-bold text-white mb-6 leading-relaxed">
            {headding}
          </h2>
          <p className=" text-[#EBEBEB] text-2xl mb-8">{subheading}</p>
          <div>
            <Link to="/signup">
            <button className="py-3 px-8 bg-green font-semibold text-white rounded hover:bg-dark_grenn  transition-all duration-300">
              {btn1}
            </button>
            </Link>
           {" "}
            {/* When you implement adding today tappin details look at video 23.02(md ai mamun(titel = React JS Project using Tailwind CSS for Beginners | React JS Tutorial 2023)) */}
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Banner;
