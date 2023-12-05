import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import UserMenu from "../../sections/userProfileSections/UserMenu";
import Dashboard from "../../sections/userProfileSections/Dashboard";
import EditProfile from "../../sections/userProfileSections/editProfile/EditProfile";
import ChangePassword from "../../sections/userProfileSections/changePassword/ChangePassword";
import MyBookings from "../../sections/userProfileSections/MyBookings";
import WishList from "../../sections/userProfileSections/WishList";
import { useDispatch } from "react-redux";
import { getToursData } from "../../redux/toursDataSlice";
import { getUsersData } from "../../redux/usersDataSlice";
import CustomHelmet from "../../components/CustomHelmet";
import "./index.scss";

const UserProfile = () => {
  const { type } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getToursData());
    dispatch(getUsersData());
  }, [dispatch]);

  return (
    <>
      <CustomHelmet
        title={"User Profile - Camper"}
        description={
          "View and manage your user profile on Camper. Update your details, preferences, and explore personalized content tailored just for you."
        }
      />
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
            {type == "wishList" && <WishList />}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
