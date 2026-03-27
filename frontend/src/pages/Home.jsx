import React from "react";
import Banner from "../component/Banner";
import InstrumentCards from "../component/InstrumentCards";
import Musiclogin from "../component/Musiclogin";
import LessonsSection from "../component/LessonsSection";
// import QuizSection from "../component/QuizSection";
import LearnMusicSection from "../component/LearnMusicSection";



function Home() {
  return (
    <>
    
      <Banner />
      <InstrumentCards/>
      <Musiclogin/>
       <LearnMusicSection/>
     
      <LessonsSection/> 
     
    </>
  );
}

export default Home;
