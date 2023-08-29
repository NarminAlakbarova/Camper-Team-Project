import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import { AiFillStar } from "react-icons/ai";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OurTours = ({ sectionTitle }) => {
  const tours = useSelector((state) => state.toursData.data);
  const ourPopularTours = tours.filter((item) => item.tourRaiting > 7 && item);
  const newTours = tours.slice(-9);

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
    <div id={sectionTitle} className="our-tours">
      <div className="container">
        <div className="our-popular-tours">
          <div className="our-popular-tours-top">
            <p>
              {sectionTitle == "our-popular-tours"
                ? "Our Popular Tours"
                : "New Tours"}
            </p>
            <Link to={"./allTours"}>View All Tours</Link>
          </div>
          {sectionTitle == "our-popular-tours" ? (
            <Slider {...settings}>
              {ourPopularTours.map((item) => {
                return (
                  <div key={uuid()} className="popular-tour-card">
                    <div className="popular-card-img">
                      <Link to={""}>
                        <img src={item?.tourImg[0]} alt="popular tour image" />
                      </Link>
                      <Link to={""} className="img-text">
                        Popular Tour
                      </Link>
                    </div>
                    <div className="popular-card-info">
                      <p>
                        <span>
                          <AiFillStar />
                        </span>
                        <span>
                          <AiFillStar />
                        </span>
                        <span>
                          <AiFillStar />
                        </span>
                        <span>
                          <AiFillStar />
                        </span>
                        <span>
                          <AiFillStar />
                        </span>
                        ({item?.tourReview} review)
                      </p>
                      <Link to={""}>{item?.tourTitle}</Link>
                      <p>
                        {item?.tourDuringDay} days {item?.tourDuringNight}{" "}
                        {item?.tourDuringNight && "night"}
                      </p>
                      <p>{item.tourLocation}</p>
                      <p>
                        From{" "}
                        {item.tourPrevPrice && (
                          <span className="tour-prev-price">
                            ${item.tourPrevPrice}
                          </span>
                        )}
                        <span className="tour-price">
                          {" "}
                          ${item?.tourPriceUSD}
                        </span>
                      </p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          ) : (
            <Slider {...settings}>
              {newTours.map((item) => {
                return (
                  <div key={uuid()} className="popular-tour-card">
                    <div className="popular-card-img">
                      <Link to={""}>
                        <img src={item.tourImg[0]} alt="popular tour image" />
                      </Link>
                      <Link to={""} className="img-text">
                        Popular Tour
                      </Link>
                    </div>
                    <div className="popular-card-info">
                      <p>
                        <span>
                          <AiFillStar />
                        </span>
                        <span>
                          <AiFillStar />
                        </span>
                        <span>
                          <AiFillStar />
                        </span>
                        <span>
                          <AiFillStar />
                        </span>
                        <span>
                          <AiFillStar />
                        </span>
                        ({item?.tourReview} review)
                      </p>
                      <Link to={""}>{item?.tourTitle}</Link>
                      <p>
                        {item?.tourDuringDay} days {item?.tourDuringNight}{" "}
                        {item?.tourDuringNight && "night"}
                      </p>
                      <p>{item?.tourLocation}</p>
                      <p>
                        From{" "}
                        {item.tourPrevPrice && (
                          <span className="tour-prev-price">
                            ${item.tourPrevPrice}
                          </span>
                        )}
                        <span className="tour-price">
                          {" "}
                          ${item?.tourPriceUSD}
                        </span>
                      </p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          )}
        </div>
      </div>
    </div>
  );
};

export default OurTours;
