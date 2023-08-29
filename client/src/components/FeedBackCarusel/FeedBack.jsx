import React, {  useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from "react-redux";
import { AiFillStar } from "react-icons/ai";

const FeedBack = () => {
  const users = useSelector((state) => state.feedBackData.data);
  console.log(users);
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
    centerPadding: "0",
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
const sliderStyle={
  width:"700px"
}
  return (
    <div className="slider-container">
      <div className="slider">
      <Slider {...settings}>
        {users.map((user, index) => (
          <div
            className={index === slideIndex ? `slide slide-active  ` : `slide `}
            key={index}
            style={sliderStyle}
          >
            <div className="feed-back-content">
            <img src={user.userImg} alt="" />
              <div className="title">
                <div className="user-info">
                  <p>{user.userName}</p>
                  <p>{user.userStatus}</p>
                </div>

                <div className="icons">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>
              </div>
          
            </div>
            <div className="comment">
                <p>{user.feedBack}</p>
              </div>
          </div>
        ))}
        
      </Slider>
      </div>
    </div>
  
  );
};

export default FeedBack;
