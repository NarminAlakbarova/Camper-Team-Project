import React from "react";
import { Link } from "react-router-dom";
import SliderCarousel from "../../components/sliderCarousel/SliderCarousel";

const Activities = () => {
  return (
    <div className="activities">
      <div className="container">
        <div className="activities-top-text">
          <p>By Activities</p>
          <Link to={""}>View All Activities</Link>
        </div>
      </div>
      <SliderCarousel />
    </div>
  );
};

export default Activities;
