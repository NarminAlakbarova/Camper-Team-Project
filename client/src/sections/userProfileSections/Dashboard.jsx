import React, { useContext } from "react";
import { PiUserCircleThin } from "react-icons/pi";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserProvider";

const Dashboard = () => {
  const { checkUser } = useContext(UserContext);
  return (
    <div className="user-dashboard-right">
      <div className="user-info">
        <div className="user-info-header">
          <h3>My Profile</h3>
          <Link to={"/userProfile/editProfile"}>Edit Profile</Link>
        </div>
        <div className="user-img-info">
          <div className="user-img">
            <PiUserCircleThin />
          </div>
          <div className="user-info-content">
            <div className="user-info-content-left">
              <div>
                <p>Username</p>
                <p>Name</p>
                <p>Lastname</p>
                <p>Email</p>
              </div>
              <div className="user-infomations">
                <p>{checkUser?.userName}</p>
                <p>{checkUser?.firstName}</p>
                <p>{checkUser?.lastName}</p>
                <p>{checkUser?.email}</p>
              </div>
            </div>
            <div className="user-info-content-right">
              <div>
                <p>Country</p>
                <p>Phone</p>
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

export default Dashboard;
