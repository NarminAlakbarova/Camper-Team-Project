import React from "react";
import { AiFillStar } from "react-icons/ai";
import { FaRegCalendarDays } from "react-icons/fa6";
import { HiOutlineClock } from "react-icons/hi";
import { Link } from "react-router-dom";

const Card2 = ({ tour }) => {
  return (
    <div className="tour-card2">
      <div className="tour-card2-img">
        <img src={tour?.tourImg[0]} alt="Tour Image" />
      </div>
      <div className="tour-card2-content">
        <div className="tour-card2-content-left">
          <Link className="tour-title" to={`/tourDetails/${tour.id}`}>
            {tour?.tourTitle}
          </Link>
          <p className="tour-text">
            <span>
              <HiOutlineClock />
            </span>{" "}
            {tour?.tourDuringDay} days {tour?.tourDuringNight}{" "}
            {tour?.tourDuringNight && "night"}
          </p>
          <p className="tour-text">
            <span>
              <FaRegCalendarDays />
            </span>
            Availability:{" "}
            {`${tour?.tourAvailability[0]}-${tour?.tourAvailability.at(-1)}`}
          </p>
        </div>
        <div className="tour-card2-content-right">
          <p className="tour-text">
            From{" "}
            {tour.tourPrevPrice && (
              <span className="tour-prev-price">${tour.tourPrevPrice}</span>
            )}
            <br /> 
            <span className="tour-price"> ${tour?.tourPriceUSD}</span>
          </p>
          <div className="tour-review">
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
            <p className="tour-text">({tour?.tourReview} Review)</p>
            <div>
              <Link to={`/tourDetails/${tour.id}`}>VIEW DETAILS</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card2;
