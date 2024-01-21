
import { Link } from "react-router-dom";
const EammuHeading_1 = () => {
    return (
        <div>
                    {/* Eammu Heading Section */}
                  
        <div className="hero min-h-[60vh] ">
  <div className="hero-content text-center">
    <div className="max-w-6xl">
      <h1 className="text-4xl font-bold">Welcome To Eammu</h1>
      <h2 className="text-4xl font-light">Something New..!</h2>
      <p className="my-6">Eammu is a dynamic and innovative company at the forefront of digital transformation. Established in 2022, we specialize in e-commerce and marketing services, offering cutting-edge solutions to propel businesses to new heights. Our expertise extends to immigration consultancy services, guiding individuals and businesses through seamless transitions. Committed to excellence, we leverage technology to redefine industry landscapes, providing diverse services with a customer-centric approach. Join us on a journey of innovation, where Eammu shapes the future and exceeds expectations.</p>
      <Link to='/about'><h3 className="hover:shadow-[#122712] hover:shadow-lg btn text-lg hover:bg-[#072504] hover:text-[#ffffff] bg-white text-[#072504]  border-[1.5px] border-[#072504]">Explore More</h3> </Link>
    </div>
  </div>
        </div>
        </div>
    );
};

export default EammuHeading_1;