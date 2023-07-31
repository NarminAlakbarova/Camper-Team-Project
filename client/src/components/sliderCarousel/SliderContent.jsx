import React from "react";
import { Link } from "react-router-dom";

const SliderContent = ({img,tourName,tourCount}) => {
  return (
    <div className="activities-card">
      <div className="activities-img">
        <img src={img} alt="" />
      </div>
      <div className="activities-text">
        <Link to={""}>{tourName}</Link>
        <Link to={""}>{tourCount}</Link>
      </div>
    </div>
  );
};

export default SliderContent;
