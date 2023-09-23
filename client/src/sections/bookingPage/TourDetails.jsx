import React from "react";
import Confidence from "../blogSections/Confidence";
import PaymentMethods from "./PaymentMethods";

const TourDetails = ({ pageChanges, setPageChanges }) => {
 let bookingData= JSON.parse(localStorage.getItem("bookingData"))
  return (
    <>
      <div id="tour-details">
        <h4
          style={{
            fontWeight: "700",
            fontSize: "18px",
          }}
        >
      {
        bookingData.tourTitle
      }
        </h4>
        <p>
          Travel Date : <span>{bookingData.bookingSelectedDate}</span>
        </p>
        <p>
          Traveller : <span>{bookingData.numberPeople}</span>
        </p>
        <p>
          Total Price : <span>{bookingData.tourPrice} $</span>
        </p>
      </div>
      {pageChanges ? <PaymentMethods /> : null}
      <div className="booking-confidence" style={{ margin: "50px 0" }}>
        <Confidence />
      </div>
    </>
  );
};

export default TourDetails;
