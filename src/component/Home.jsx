import banner from "../assets/tree.png";
import Banner from "../shared/Banner";




const Home = () => {
  return (
    <div className="md:px-12 p-4 max-w-screen-2xl mx-auto mt-28" id="home">
        <Banner
         banner={banner}
          headding="Leading Latex Collection Company"
          subheading="Specializing in sustainable rubber sourcing"
           btn1={'Get Started'}
        />
    </div>
  );
};

export default Home;
