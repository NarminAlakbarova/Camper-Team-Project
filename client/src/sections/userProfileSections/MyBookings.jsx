import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserProvider";
import { IoIosArrowForward } from "react-icons/io";
import img from "../../assets/img/homePage/newTour1.jpg"

const MyBookings = () => {
  const { checkUser } = useContext(UserContext);
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
          <h3>Tour Name</h3>
        </div>
        <div className="user-img-info">
          <div className="tour-img">
            <img src={img} alt="Tour Image" />
          </div>
          <div className="user-info-content">
            <div className="user-info-content-left">
              <div>
                <p>Tour Location</p>
                <p>Tour Price</p>
                <p>Tour Availability</p>
                <p>Tour Rating</p>
                <p>Number People</p>
              </div>
              <div className="user-infomations">
                <p>{checkUser?.userName}</p>
                <p>{checkUser?.firstName}</p>
                <p>{checkUser?.lastName}</p>
                <p>{checkUser?.email}</p>
                <p>{checkUser?.email}</p>
              </div>
            </div>
            <div className="user-info-content-right">
              <div>
                <p>All Selected Days</p>
                <p>allSelectedDays</p>
              </div>
              <div className="user-infomations">
                <p>{checkUser?.country}</p>
                <p>{checkUser?.phone}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBookings;
