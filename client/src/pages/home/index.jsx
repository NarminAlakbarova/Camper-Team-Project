import React from "react";
import HeroBanner from "../../sections/homeSections/HeroBanner";
import "./index.scss";
import Search from "../../sections/homeSections/Search";
import Activities from "../../sections/homeSections/Activities";
import InformationCards from "../../sections/homeSections/InformationCards";
import AboutCamper from "../../sections/homeSections/AboutCamper";
import OurTours from "../../sections/homeSections/OurTours";

const HomePage = () => {
  return (
    <>
      <HeroBanner />
      <Search />
      <InformationCards/>
      <Activities/>
      <OurTours sectionTitle={"our-popular-tours"}/>
      <OurTours sectionTitle={"new-tours"}/>
      <AboutCamper/>
    </>
  );
};

export default HomePage;
