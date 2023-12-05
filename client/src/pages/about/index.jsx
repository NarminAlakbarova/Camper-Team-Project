import React from "react";
import HeroBanner from "../../sections/aboutSections/HeroBanner";
import "./index.scss";
import FaqSection from "../../sections/aboutSections/FaqSection";
import DiscoverTours from "../../sections/homeSections/DiscoverTours";
import AboutCounter from "../../sections/aboutSections/AboutCounter";
import Leaders from "../../sections/aboutSections/Leaders";
import OurMission from "../../sections/aboutSections/OurMission";
import CustomHelmet from "../../components/CustomHelmet";

const AboutPage = () => {
  return (
    <>
      <CustomHelmet
        title={"About Page - Camper"}
        description={
          "Discover the story behind Camper. Learn about our mission, values, and what makes us unique in providing exceptional tours and experiences."
        }
      />
      <HeroBanner />
      <AboutCounter />
      <Leaders />
      <DiscoverTours />
      <OurMission />
      <FaqSection />
    </>
  );
};

export default AboutPage;
