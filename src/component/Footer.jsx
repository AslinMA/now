import Logo from "../assets/logo.png";
import aword from "../assets/maddle.png";
aword;
const Footer = () => {
  return (
    <div className="md:px-20 p-5 max-w-s mx-auto  mt-20 bg-gray-200">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        {/*======================= collum 1-================================= */}

        <div className="gap-6">
          <div>
            <img
              src={Logo}
              alt=""
              style={{ width: "150px", height: "100px" }}
            />
          </div>
        </div>
        {/*======================= collum 2-================================= */}

        <div className="">
          <div>
            <h5 className="md:text-2xl  font-bold text-primary mb-9 ">Plattform</h5>
          </div>
          
            <h5 className="md:text-1xl  font-bold text-primary mb-2 ">
              <a href="" className="">
                Home
              </a>
              <br />
            </h5>
            <h5 className="md:text-1xl  font-bold text-primary mb-2 ">
              <a href="">Bills</a>
              <br />
            </h5>
            <h5 className="md:text-1xl  font-bold text-primary mb-2 ">
              <a href="">Collection</a>
              <br />
            </h5>
            <h5 className="md:text-1xl  font-bold text-primary mb-2 ">
              <a href="">Contact</a>
              <br />
            </h5>
            <h5 className="md:text-1xl  font-bold text-primary  ">
              <a href="">Home</a>
            </h5>
        
        </div>

        {/*======================= collum 3-================================= */}

        <div className=" gap-6">
          <div>
            <div>
              <h5 className="md:text-2xl  font-bold text-primary mb-5 ">
                Contact Us
              </h5>
            </div>
            <h5 className="md:text-1xl  font-bold text-primary mb-5 ">
              Tel : +94 114 311 200<br></br>
              Fax: +94 114 311 222<br></br>
              Email: info@lalangroup.com
            </h5>
            <h5 className="md:text-1xl  font-bold text-tartiary  ">
              <span className="md:text-1xl  font-bold text-primary">
                {" "}
                Address:{" "}
              </span>{" "}
              No.95B,Zone A,<br></br> EPZ, Biyagama,<br></br> 11672,Sri Lanka
            </h5>
          </div>
        </div>
        {/*======================= collum 4-================================= */}

        <div className=" gap-6">
          <div>
            <img
              src={aword}
              alt=""
              style={{ width: "250px", height: "250px" }}
            />
          </div>
        </div>
      </div>
      <div className="mt-4">
        <div>
          <img src="" alt="" />
        </div>
      </div>
      <hr className="border-t border-black border-solid border-1 mt-10" />
      <div className="mt-4">
        <p className="text-center text-gray-600 text-m">
          Copyright © 2024 Latex Harvester. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
