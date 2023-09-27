import React, { useContext } from "react";
import { AiFillStar } from "react-icons/ai";
import { FaEuroSign } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CurrencyContext } from "../../../context/CurrencyProvider";

const Card1 = ({ tour }) => {
  const {currency}=useContext(CurrencyContext)
  return (
    <div className="col col-12 col-md-6 tour-card1">
      <div className="link-img">
        <Link to={`/tourDetails/${tour.id}`}>
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
        <Link className="tour-title" to={`/tourDetails/${tour.id}`}>
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
          {(tour.tourPrevPrice || tour.tourPrevPrice!=0) && (
            <span className="tour-prev-price">{currency=="EUR" ? <FaEuroSign /> : currency}{tour.tourPrevPrice}</span>
          )}
          <span className="tour-price"> {currency=="EUR" ? <FaEuroSign /> : currency}{tour?.tourPriceUSD}</span>
        </p>
      </div>
    </div>
  );
};

export default Card1;
