import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import activities1 from "../../assets/img/homePage/activities1.jpg";
import activities2 from "../../assets/img/homePage/activities2.jpg";
import activities3 from "../../assets/img/homePage/activities3.jpg";
import activities4 from "../../assets/img/homePage/activities4.jpg";
import activities5 from "../../assets/img/homePage/activities5.jpg";
import activities6 from "../../assets/img/homePage/activities6.jpg";
import SliderContent from "./SliderContent";

const SliderCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      <SliderContent img={activities1} tourName={"BACKPACKING TRIPS"} tourCount={"5 TOURS"}/>
      <SliderContent img={activities2} tourName={"BASECAMP TOURS"} tourCount={"6 TOURS"}/>
      <SliderContent img={activities3} tourName={"FAMILY CAMPING"} tourCount={"8 TOURS"} />
      <SliderContent img={activities4} tourName={"GLAMPING"} tourCount={"6 TOURS"} />
      <SliderContent img={activities5} tourName={"TREKKING"} tourCount={"6 TOURS"} />
      <SliderContent img={activities6} tourName={"WINTER CAMPING"} tourCount={"5 TOURS"}/>
    </Slider>
  );
};

export default SliderCarousel;
