import icone1 from "../assets/icone1.png";
import icone2 from "../assets/icone2.png";
import icone3 from "../assets/icone3.png";

const IconeLine = () => {
  return (
    <div className="md:px-20 p-5 max-w-s mx-auto  mt-20 bg-icon_background">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">

             {/*======================= icone 1-================================= */}

      <div className="flex flex-col md:flex-row justify-between gap-6">
          <div>
            <img src={icone1} alt="" />
          </div>
          <div>
            <h5 className="md:text-2xl  font-bold text-primary mb-5 ">3.2  Billion</h5>
            <p className="text-tartiary md:text-1xl" >GLOVES ANNUALLY</p>
          </div>
        </div>
          {/*======================= icone 2-================================= */}

        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div>
            <img src={icone2} alt="" />
          </div>
          <div>
            <h5 className="md:text-2xl  font-bold text-primary mb-5 ">53 +</h5>
            <p className="text-tartiary md:text-1xl" >COUNTRIES  SERVED</p>
          </div>
        </div>

           {/*======================= icone 3-================================= */}

        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div>
            <img src={icone3} alt="" />
          </div>
          <div>
            <h5 className="md:text-2xl  font-bold text-primary mb-5 ">7,500</h5>
            <p className="text-tartiary md:text-1xl" >TEAM MEMBERS</p>
          </div>
        </div>
        

      </div>
    </div>
  )
}

export default IconeLine
