import React from "react";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

const Card1 = ({ tour }) => {
  return (
    <div className="col col-12 col-md-6 tour-card1">
      <div className="link-img">
        <Link>
          <img src={tour?.tourImg[0]} alt="Tour Image" />
        </Link>
      </div>
      <div className="tour-content">
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
          <span className="tour-text">({tour?.tourReview} Review)</span>
        </div>
        <Link className="tour-title" to={""}>
          {tour?.tourTitle}
        </Link>
        <p className="tour-text">
          {tour?.tourDuringDay} days {tour?.tourDuringNight}{" "}
          {tour?.tourDuringNight && "night"}
        </p>
        <p className="tour-text">
          Availability:{" "}
          {`${tour?.tourAvailability[0]}-${tour?.tourAvailability.at(-1)}`}
        </p>
        <p className="tour-text">
          From{" "}
          {tour.tourPrevPrice && (
            <span className="tour-prev-price">${tour.tourPrevPrice}</span>
          )}
          <span className="tour-price"> ${tour?.tourPriceUSD}</span>
        </p>
      </div>
    </div>
  );
};

export default Card1;
