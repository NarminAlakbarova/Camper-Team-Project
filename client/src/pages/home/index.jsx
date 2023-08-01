import React from "react";
import HeroBanner from "../../sections/homeSections/HeroBanner";
import "./index.scss";
import Search from "../../sections/homeSections/Search";
import Activities from "../../sections/homeSections/Activities";
import InformationCards from "../../sections/homeSections/InformationCards";
import AboutCamper from "../../sections/homeSections/AboutCamper";

import LastestNews from "../../sections/homeSections/LastestNews";


import OurTours from "../../sections/homeSections/OurTours";
import GalleryHome from "../../sections/homeSections/GalleryHome";
import DiscoverTours from "../../sections/homeSections/DiscoverTours";


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

      <LastestNews/>

      <GalleryHome/>
      <DiscoverTours/>

    </>
  );
};

export default HomePage;
