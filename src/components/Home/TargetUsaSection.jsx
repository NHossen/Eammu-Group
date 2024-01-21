
import { Link } from "react-router-dom";
const TargetUsaSection = () => {
    return (
        <div>
                  <div>
        <h1 className="my-6 text-3xl text-center font-bold">Target <span className="text-[#d33232]">USA</span> Visa Interview Preparation</h1>
        <div className="hero min-h-[70vh] ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="https://i.ibb.co/Dtg4HWy/d-ISCUSSION.jpg" alt="targetusainterviewphoto" className="lg:max-w-md rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Target <span className="text-[#d33232]">USA</span> Visa Interview Preparation!</h1>
      <p className="py-6">Target USA Visa Interview Preparation, a distinguished service under Eammu Immigration Services, is your premier education consultancy dedicated to preparing students for successful visa interviews. We specialize in comprehensive guidance, covering everything from interview dress-up to question patterns and interview types, ensuring that students are well-prepared for their crucial visa application process.</p>
      <Link to='/targetusavisainterview'><h3 className="hover:shadow-[#bfc0bf] hover:shadow-lg btn text-lg hover:bg-[#072504] hover:text-[#ffffff] bg-white text-[#072504]  border-[1.5px] border-[#072504]">Explore More</h3> </Link>
    </div>
  </div>
</div>
      </div>
        </div>
    );
};

export default TargetUsaSection;