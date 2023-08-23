import React, { useEffect } from "react";
import HeroBanner from "../../sections/homeSections/HeroBanner";
import "./index.scss";
import Search from "../../sections/homeSections/Search";
import Activities from "../../sections/homeSections/Activities";
import InformationCards from "../../sections/homeSections/InformationCards";
import AboutCamper from "../../sections/homeSections/AboutCamper";
import OurTours from "../../sections/homeSections/OurTours";
import GalleryHome from "../../sections/homeSections/GalleryHome";
import DiscoverTours from "../../sections/homeSections/DiscoverTours";
import LastestNews from "../../sections/homeSections/LastestNews";
import CustomerSaid from "../../sections/homeSections/CustomerSaid";
import { useDispatch } from "react-redux";
import { getNewsData } from "../../redux/newsDataSlice";
import { feedBackData } from "../../redux/feedBackDataSlice";
import { getToursData } from "../../redux/toursDataSlice";

const HomePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNewsData());
    dispatch(feedBackData());
    dispatch(getToursData());
  }, [dispatch]);
  return (
    <>
      <HeroBanner />
      <Search />
      <InformationCards />
      <Activities />
      <OurTours sectionTitle={"our-popular-tours"} />
      <OurTours sectionTitle={"new-tours"} />
      <AboutCamper />
      <GalleryHome />
      <LastestNews />
      <DiscoverTours />
      <CustomerSaid />
    </>
  );
};

export default HomePage;
