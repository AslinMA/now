import fretureImg_seftyglue from "../assets/glouse_Sefty.png";
import fretureImg_Sergicalglue from "../assets/sergical.png";
import fretureImg_pillow from "../assets/pillow.png";
import { motion } from "framer-motion";

import { fadeIn } from "../variants";

const Features = () => {
  return (
    <div className="my-24 md:px-14 px-4 max-screen-2xl mx-auto ">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, ammount: 0.7 }}
          className="lg:w-1/2"
        >
          <h3 className="text-3xl text-primary font-fw-bolder  lg:w-1/ mb-5">
            THE WORK GLOVES SOLUTIONS PROVIDER
          </h3>
          <p className="text-base text-tartiary md:text-2xl">
            We offer a comprehensive range of rubber and value added rubber
            products and it is our privilege to be the preferred partner for the
            world’s largest brands.
          </p>
        </motion.div>
        {/* feattures card */}
        <motion.div 
           variants={fadeIn("up", 0.7)}
           initial="hidden"
           whileInView={"show"}
           viewport={{ once: false, ammount: 0.2 }}
        className="w-full lg:w-3/4">
          <div className="grid md:grid-cols-3 sm;grid-cols-2 grid-cols-1 items-start md:gap-12 gap-8">
            {/*================== 1st cart======================= */}
            <div className="bg-[rgba(255,255,255,0.04)] rounded-[35px] h-96 shadow-3xl p-8 items-center flex  justify-center items-center hover:translate-y-4 transtion-all duration-300 cursor-pointer">
              <div>
                <img src={fretureImg_seftyglue} alt="" className="rounded-full" />
                <h5 className=" mb-2 text-2xl font-semibold text-primary px-5 text-center ">
                  Sefty Gloves
                </h5>
                <p className="text-tartiary md:text-1xl">
                  Lalan Rubbers is the glove manufacturing arm of the Lalan
                  Group
                </p>
              </div>
            </div>

            {/*================== 2nd cart======================= */}
            <div className="bg-[rgba(255,255,255,0.04)] rounded-[35px] h-96 shadow-3xl p-8 items-center flex  justify-center items-center hover:translate-y-4 transtion-all duration-300 cursor-pointer md:mt-16">
              <div>
                <img src={fretureImg_Sergicalglue} alt="" className="rounded-full" />
                <h5 className=" mb-2 text-2xl font-semibold text-primary px-5 text-center ">
                  Surgical Gloves
                </h5>
                <p className="text-tartiary md:text-1xl">
                  Lalan Rubbers, crafting precise surgical gloves within the
                  renowned Lalan Group
                </p>
              </div>
            </div>

            {/*================== 3rd cart======================= */}
            <div className="bg-[rgba(255,255,255,0.04)] rounded-[35px] h-96 shadow-3xl p-8 items-center flex  justify-center items-center hover:translate-y-4 transtion-all duration-300 cursor-pointer">
              <div className="rounded">
                <img src={fretureImg_pillow} alt="" className="rounded-full" />
                <h5 className=" mb-2 text-2xl font-semibold text-primary px-5 text-center ">
                  Natural Latex Pillow
                </h5>
                <p className="text-tartiary md:text-1xl">
                  {" "}
                  luxurious pillows, ensuring comfort and quality
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Features;
