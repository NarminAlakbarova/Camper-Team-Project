import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const MyBookings = () => {
  const bookingData = JSON.parse(localStorage.getItem("bookingData"));
  return (
    <div className="user-dashboard-right">
      <p className="page-path">
        <Link to="/userProfile/dashboard">
          Dashboard
          <IoIosArrowForward />
        </Link>
        My Bookings
      </p>
      <div className="user-info">
        <div className="user-info-header">
          <h3>{bookingData?.tourTitle}</h3>
        </div>
        <div className="user-img-info">
          <div className="tour-img">
            <img src={bookingData?.tourImg} alt="Tour Image" />
          </div>
          <div className="user-info-content">
            <div className="user-info-content-left">
              <div>
                <p>
                  Tour Location <span>{bookingData?.tourLocation}</span>
                </p>
                <p>
                  Tour Price <span>$ {bookingData?.tourPrice}</span>
                </p>
                <p>
                  Tour Availability{" "}
                  <span>{bookingData?.tourAvailability.join(", ")}</span>
                </p>
                <p>
                  Tour Rating <span>{bookingData?.tourRating}</span>
                </p>
                <p>
                  Number People <span>{bookingData?.numberPeople}</span>
                </p>
                <p>
                  Tour During Days <span>{bookingData?.tourDuringDay}</span>
                </p>
                <p>
                  First Day <span>{bookingData?.bookingSelectedDate}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBookings;
