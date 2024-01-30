
import Caresoul_BG_Mix from "../../Home/Caresoul_BG_Mix";
import EammuImmigrationHeading_2 from "../../Home/EammuImmigrationHeading_2";
import Eammu_Carousel from "../../Home/Eammu_Carousel";
import Our_Succsses_State from "../../Home/Our_Succsses_State";
import Registration_Agents from "../../Home/Registration_Agents";
import Services_Card_Section from "../../Home/Services_Card_Section/Students_Cards";
import TargetUsaSection from "../../Home/TargetUsaSection";
import About_Eammu_Immigration from "./About_Eammu_Immigration";
import Immigration_Header_Section from "./Immigration_Header_Section";


const EammuImmigrationServices = () => {
    return (
        <div>
  {/* Immigration_Header_Section */}
  <Immigration_Header_Section></Immigration_Header_Section>

  {/* EammuImmigrationHeading_2 */}
  <EammuImmigrationHeading_2></EammuImmigrationHeading_2>
                {/* Our Services */}
            {/* <!-- Carousel list --> */}
  <Eammu_Carousel></Eammu_Carousel>
         {/* Services Card */}
       <Services_Card_Section></Services_Card_Section>
             {/* Target Usa Visa Interview Preparation */}
      <TargetUsaSection></TargetUsaSection>

      {/* Registration */}
      <Registration_Agents ></Registration_Agents>
      {/* Caresoul_BG_Mix */}
      <Caresoul_BG_Mix></Caresoul_BG_Mix>
        {/* Our_Succsses_State */}
        <Our_Succsses_State></Our_Succsses_State>
          {/* About_Eammu_Immigration Services */}
       <About_Eammu_Immigration></About_Eammu_Immigration>


        </div>
    );
};

export default EammuImmigrationServices;