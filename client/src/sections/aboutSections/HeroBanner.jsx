import React from "react";
import { Carousel } from "antd";
import image1 from "../../assets/img/homePage/popularTour4.jpg"
import image2 from "../../assets/img/homePage/newTour4.jpg"
import image3 from "../../assets/img/homePage/newTour6.jpg"

const HeroBanner = () => {
  return (
    <div id="hero-banner-about">
      <Carousel autoplay>
        <div>
          <img src={image1} alt="Tour Image" />
        </div>
        <div>
          <img src={image2} alt="Tour Image" />
        </div>
        <div>
          <img src={image3} alt="Tour Image" />
        </div>
      </Carousel>
      <div className="dark-bg"></div>
      <div className="hero-banner-text">
        <p>About Us</p>
        <span>Enjoy an Unforgettable Experience</span>
      </div>
    </div>
  );
};

export default HeroBanner;
