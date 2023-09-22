import React, { useContext, useState } from "react";
import { BookingContext } from "../../context/BookingProvider";

const TravallerDetails = () => {
  const { bookinginfo, setBookingInfo } = useContext(BookingContext);
  // console.log(bookinginfo);
  let bookingData = JSON.parse(localStorage.getItem("bookingData"));
  const userNumber = Array.from(
    { length: bookingData.numberPeople },
    (v, i) => i + 1
  );

  const handleInputsChanges = (e, index) => {
    const { name, value } = e.target;
    const updatedTravelers = [...bookinginfo.traveller];

    updatedTravelers[index] = {
      ...updatedTravelers[index],
      [name]: value,
    };

    setBookingInfo({
      ...bookinginfo,
      traveller: updatedTravelers,
    });
  };

  return (
    <div className="traveller-details">
      <h3>Traveller Details</h3>
      <form action="">
        {userNumber.map((item, index) => (
          <div className="form-group" key={index}>
            <label htmlFor="">
              Traveller <span style={{ marginLeft: "10px" }}>{item}</span>
            </label>
            <select
              name="gender"
              id=""
              value={bookinginfo.traveller[index]?.gender}
              onChange={(e) => handleInputsChanges(e, index)}
              required
            >
              <option value="Mr">Mr</option>
              <option value="Mrs">Mrs</option>
              <option value="Ms">Ms</option>
              <option value="Miss">Miss</option>
              <option value="Master">Master</option>
            </select>
            <input
              type="text"
              placeholder="First Name.."
              name="firstName"
              value={bookinginfo.traveller[index]?.firstName}
              onChange={(e) => handleInputsChanges(e, index)}
              required
            />
            <input
              type="text"
              placeholder="Last Name.."
              name="lastName"
              value={bookinginfo.traveller[index]?.lastName}
              onChange={(e) => handleInputsChanges(e, index)}
              required
            />
          </div>
        ))}
      </form>
    </div>
  );
};

export default TravallerDetails;
