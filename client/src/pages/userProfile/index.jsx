import React from "react";
import { useParams } from "react-router-dom";
import UserMenu from "../../sections/userProfileSections/UserMenu";
import Dashboard from "../../sections/userProfileSections/Dashboard";
import EditProfile from "../../sections/userProfileSections/editProfile/EditProfile";
import ChangePassword from "../../sections/userProfileSections/changePassword/ChangePassword";
import MyBookings from "../../sections/userProfileSections/MyBookings";
import "./index.scss";

const UserProfile = () => {
  const { type } = useParams();
  return (
    <>
      <div id="user-profile-hero-section">
        <div className="container">
          <div className="user-profile-hero-section">
            <h1>Dashboard</h1>
          </div>
        </div>
      </div>
      <div>
        <div className="container">
          <div className="user-profile-context">
            <UserMenu />
            {type == "dashboard" && <Dashboard />}
            {type == "editProfile" && <EditProfile />}
            {type == "changePassword" && <ChangePassword />}
            {type == "myBookings" && <MyBookings />}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
