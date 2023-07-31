import React from "react";
import HeroBanner from "../../sections/homeSections/HeroBanner";
import "./index.scss";
import Search from "../../sections/homeSections/Search";
import Activities from "../../sections/homeSections/Activities";
import InformationCards from "../../sections/homeSections/InformationCards";
import AboutCamper from "../../sections/homeSections/AboutCamper";


const HomePage = () => {
  return (
    <>
      <HeroBanner />
      <Search />
      <Activities/>
      <InformationCards/>
      <AboutCamper/>
      
    </>
  );
};

export default HomePage;
