import React from "react";
import HeroBanner from "../../sections/homeSections/HeroBanner";
import "./index.scss";
import Search from "../../sections/homeSections/Search";
import TestSection from "../../sections/homeSections/TestSection";

const HomePage = () => {
  return (
    <>
      <HeroBanner />
      <Search />
      <TestSection/>
    </>
  );
};

export default HomePage;
