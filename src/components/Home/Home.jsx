
import Caresoul_BG_Mix from "./Caresoul_BG_Mix";
import EammuHeading_1 from "./EammuHeading_1";
import EammuImmigrationHeading_2 from "./EammuImmigrationHeading_2";
import Eammu_Carousel from "./Eammu_Carousel";
import MessageFromLeadingTeam from "./MessageFromLeadingTeam";
import Our_Succsses_State from "./Our_Succsses_State";
import Registration_Agents from "./Registration_Agents";
import Students_Cards from "./Services_Card_Section/Students_Cards";
import Tourist_Visa_Cards from "./Services_Card_Section/Tourist_visa/Tourist_Visa_Cards";
import Work_Visa_Cards from "./Services_Card_Section/Work_visa/Work_Visa_Cards";
import TargetUsaSection from "./TargetUsaSection";
import WhyChoiceEammu from "./WhyChoiceEammu";



const Home = () => {
    return (
        <div>

      <EammuHeading_1></EammuHeading_1>
      {/* Eammu Immigration Services Heading Section */}
      <EammuImmigrationHeading_2></EammuImmigrationHeading_2>
      {/* <!-- Carousel list --> */}
      {/* Our Services */}
      <Eammu_Carousel></Eammu_Carousel>
        {/* Services Card */}
        <Students_Cards></Students_Cards>
        <Tourist_Visa_Cards></Tourist_Visa_Cards>
        <Work_Visa_Cards></Work_Visa_Cards>

      {/* Target Usa Visa Interview Preparation */}
      <TargetUsaSection></TargetUsaSection>

      {/* Registration With Eammu As A Agents */}
      <Registration_Agents></Registration_Agents>

      {/* Message From Leading Team */}
      <MessageFromLeadingTeam></MessageFromLeadingTeam>
      {/* Why Choice Us */}
      <WhyChoiceEammu></WhyChoiceEammu>
      {/* Caresoul_BG_Mix */}
      <Caresoul_BG_Mix></Caresoul_BG_Mix>
        {/* Our_Succsses_State */}
        <Our_Succsses_State></Our_Succsses_State>


        </div>
    );
};

export default Home;