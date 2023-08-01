import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import popularTour1 from "../../assets/img/homePage/popularTour1.jpg";
import popularTour2 from "../../assets/img/homePage/popularTour2.jpg";
import popularTour3 from "../../assets/img/homePage/popularTour3.jpg";
import popularTour4 from "../../assets/img/homePage/popularTour4.jpg";
import popularTour5 from "../../assets/img/homePage/popularTour5.jpg";
import popularTour6 from "../../assets/img/homePage/popularTour6.jpg";
import newTour1 from "../../assets/img/homePage/newTour1.jpg"
import newTour2 from "../../assets/img/homePage/newTour2.jpeg"
import newTour3 from "../../assets/img/homePage/newTour3.jpg"
import newTour4 from "../../assets/img/homePage/newTour4.jpg"
import newTour5 from "../../assets/img/homePage/newTour5.jpg"
import newTour6 from "../../assets/img/homePage/newTour6.jpg"
import newTour7 from "../../assets/img/homePage/newTour7.jpg"
import newTour8 from "../../assets/img/homePage/newTour8.jpg"
import newTour9 from "../../assets/img/homePage/newTour9.jpg"
import ToursContent from "./ToursContent";

const ToursCarousel = ({sectionTitle}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
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
    sectionTitle=="our-popular-tours" ? 
    <Slider {...settings}>
        <ToursContent tourTitle={"Munich Springfest Camping"} tourReview={1} tourDuration={"3 days"} tourLocation={"Munich, Germany"} tourPrice={"$3,900"} tourDiscount={"$3,800"} tourImg={popularTour1}/>
        <ToursContent tourTitle={"9 Days Tour du Mont Blanc Camping Trek"} tourReview={2} tourDuration={"9 days 8 night"} tourLocation={"Chamonix, France"} tourPrice={"$3,900"} tourDiscount={"$3,800"} tourImg={popularTour2}/>
        <ToursContent tourTitle={"3 Days Camping Tour du Mont Blanc "} tourReview={1} tourDuration={"3 days"} tourLocation={"Laon, France"} tourPrice={""} tourDiscount={"$5,500"} tourImg={popularTour3}/>
        <ToursContent tourTitle={"Roughing it in Style: Luxury Camping Tours for the Adventurous Traveler"} tourReview={1} tourDuration={"7 days 6 Night"} tourLocation={"Ansen, Netherlands"} tourPrice={""} tourDiscount={"$4,500"} tourImg={popularTour4}/>
        <ToursContent tourTitle={"Exploring the Great Outdoors: A Beginner’s Guide to Camping Tours"} tourReview={1} tourDuration={"8 Days7 Nights"} tourLocation={"Oregon, USA"} tourPrice={"$4,500"} tourDiscount={"$3,900"} tourImg={popularTour5}/>
        <ToursContent tourTitle={"Luxury Camping Tours for the Adventurous Traveler"} tourReview={1} tourDuration={"5 days"} tourLocation={"Ansen, Netherlands"} tourPrice={"$4,000"} tourDiscount={"$3,700"} tourImg={popularTour6}/>
    </Slider>
    :
    <Slider {...settings}>
        <ToursContent tourTitle={"Munich Springfest Camping"} tourReview={1} tourDuration={"3 days"} tourLocation={"Munich, Germany"} tourPrice={"$3,900"} tourDiscount={"$3,800"} tourImg={newTour1}/>
        <ToursContent tourTitle={"9 Days Tour du Mont Blanc Camping Trek"} tourReview={2} tourDuration={"9 days 8 night"} tourLocation={"Chamonix, France"} tourPrice={"$3,900"} tourDiscount={"$3,800"} tourImg={newTour2}/>
        <ToursContent tourTitle={"3 Days Camping Tour du Mont Blanc "} tourReview={1} tourDuration={"3 days"} tourLocation={"Laon, France"} tourPrice={""} tourDiscount={"$5,500"} tourImg={newTour3}/>
        <ToursContent tourTitle={"Roughing it in Style: Luxury Camping Tours for the Adventurous Traveler"} tourReview={1} tourDuration={"7 days 6 Night"} tourLocation={"Ansen, Netherlands"} tourPrice={""} tourDiscount={"$4,500"} tourImg={newTour4}/>
        <ToursContent tourTitle={"Exploring the Great Outdoors: A Beginner’s Guide to Camping Tours"} tourReview={1} tourDuration={"8 Days7 Nights"} tourLocation={"Oregon, USA"} tourPrice={"$4,500"} tourDiscount={"$3,900"} tourImg={newTour5}/>
        <ToursContent tourTitle={"Luxury Camping Tours for the Adventurous Traveler"} tourReview={1} tourDuration={"5 days"} tourLocation={"Ansen, Netherlands"} tourPrice={"$4,000"} tourDiscount={"$3,700"} tourImg={newTour6}/>
        <ToursContent tourTitle={"Roughing it in Style: Luxury Camping Tours for the Adventurous Traveler"} tourReview={1} tourDuration={"7 days 6 Night"} tourLocation={"Ansen, Netherlands"} tourPrice={""} tourDiscount={"$4,500"} tourImg={newTour7}/>
        <ToursContent tourTitle={"Exploring the Great Outdoors: A Beginner’s Guide to Camping Tours"} tourReview={1} tourDuration={"8 Days7 Nights"} tourLocation={"Oregon, USA"} tourPrice={"$4,500"} tourDiscount={"$3,900"} tourImg={newTour8}/>
        <ToursContent tourTitle={"Luxury Camping Tours for the Adventurous Traveler"} tourReview={1} tourDuration={"5 days"} tourLocation={"Ansen, Netherlands"} tourPrice={"$4,000"} tourDiscount={"$3,700"} tourImg={newTour9}/>
    </Slider>
  );
};

export default ToursCarousel;
