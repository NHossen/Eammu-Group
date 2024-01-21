
import Caresoul_BG_Mix from "./Caresoul_BG_Mix";
import EammuHeading_1 from "./EammuHeading_1";
import EammuImmigrationHeading_2 from "./EammuImmigrationHeading_2";
import Eammu_Carousel from "./Eammu_Carousel";
import MessageFromLeadingTeam from "./MessageFromLeadingTeam";
import Our_Succsses_State from "./Our_Succsses_State";
import Services_Card_Section from "./Services_Card_Section";
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
        <Services_Card_Section></Services_Card_Section>
      {/* Target Usa Visa Interview Preparation */}
      <TargetUsaSection></TargetUsaSection>

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