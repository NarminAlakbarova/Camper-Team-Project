import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import user1 from "../../assets/img/homePage/user1.jpg";
import user2 from "../../assets/img/homePage/user2.jpg";
import user3 from "../../assets/img/homePage/user3.jpg";

const images = [user1, user2, user3, user1, user2, user3];
const FeedBack = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    pauseOnHover: true,
    beforeChange: (current, next) => setSlideIndex(next),
    centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {images.map((img, index) => (
        <div
          className={index === slideIndex ? `slide slide-active` : `slide`}
          key={index}
        >
          <img src={img} alt="" />
        </div>
      ))}
      {/* <FeedBackContent
        userimg={user1}
        username={"Jennth Norz"}
        country={"San Francisco"}
        content={
          "The tours in this website are great. I had been really enjoy with my family! The team is very professional and taking care of the customers. Will surely recommend to my freind to join this company!"
        }
        slideIndex={slideIndex}
        setSlideIndex={setSlideIndex}
      />
      <FeedBackContent
        userimg={user2}
        username={"Jennth Norz"}
        country={"San Francisco"}
        content={
          "The tours in this website are great. I had been really enjoy with my family! The team is very professional and taking care of the customers. Will surely recommend to my freind to join this company!"
        }
        slideIndex={slideIndex}
        setSlideIndex={setSlideIndex}
      />
      <FeedBackContent
        userimg={user3}
        username={"Jennth Norz"}
        country={"San Francisco"}
        content={
          "The tours in this website are great. I had been really enjoy with my family! The team is very professional and taking care of the customers. Will surely recommend to my freind to join this company!"
        }
        slideIndex={slideIndex}
        setSlideIndex={setSlideIndex}
      />
      <FeedBackContent
        userimg={user3}
        username={"Jennth Norz"}
        country={"San Francisco"}
        content={
          "The tours in this website are great. I had been really enjoy with my family! The team is very professional and taking care of the customers. Will surely recommend to my freind to join this company!"
        }
        slideIndex={slideIndex}
        setSlideIndex={setSlideIndex}
      />
      <FeedBackContent
        userimg={user3}
        username={"Jennth Norz"}
        country={"San Francisco"}
        content={
          "The tours in this website are great. I had been really enjoy with my family! The team is very professional and taking care of the customers. Will surely recommend to my freind to join this company!"
        }
        slideIndex={slideIndex}
        setSlideIndex={setSlideIndex}
      />
      <FeedBackContent
        userimg={user3}
        username={"Jennth Norz"}
        country={"San Francisco"}
        content={
          "The tours in this website are great. I had been really enjoy with my family! The team is very professional and taking care of the customers. Will surely recommend to my freind to join this company!"
        }
        slideIndex={slideIndex}
        setSlideIndex={setSlideIndex}
      />
      <FeedBackContent
        userimg={user3}
        username={"Jennth Norz"}
        country={"San Francisco"}
        content={
          "The tours in this website are great. I had been really enjoy with my family! The team is very professional and taking care of the customers. Will surely recommend to my freind to join this company!"
        }
        slideIndex={slideIndex}
        setSlideIndex={setSlideIndex}
      /> */}
    </Slider>
  );
};

export default FeedBack;
