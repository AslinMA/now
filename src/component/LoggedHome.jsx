import banner from "../assets/tree.png";
import Banner from "../shared/LoggedBenner";

const LoggedHome = () => {
    return (
        <div className="md:px-12 p-4 max-w-screen-2xl mx-auto mt-28" id="home">
            <Banner
             banner={banner}
              headding="Leading Latex Collection Company"
              subheading="Specializing in sustainable rubber sourcing"
               btn1={'Enter'}
            />
        </div>
      );
    };

export default LoggedHome
