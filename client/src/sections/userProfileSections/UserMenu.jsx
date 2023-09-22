import React, { useContext } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { FaUserLock } from "react-icons/fa";
import { HiMiniLockOpen } from "react-icons/hi2";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdOutlineComputer, MdOutlineLibraryBooks } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "../../context/UserProvider";

const UserMenu = () => {
  const { setCheckUser } = useContext(UserContext);
  const handleSignOut = () => {
    setCheckUser("");
  };
  return (
    <div className="user-menu">
      <div className="user-account">
        <h3>My Account</h3>
        <ul>
          <li>
            <NavLink to={"/userProfile/dashboard"}>
              <MdOutlineComputer />
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/userProfile/editProfile"}>
              <BiEdit />
              <span>Edit Profile</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/userProfile/changePassword"}>
              <FaUserLock />
              <span>Change Password</span>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="user-booking">
        <h3>Tour Booking</h3>
        <ul>
          <li>
            <NavLink to={"/userProfile/myBookings"}>
              <MdOutlineLibraryBooks />
              <span>My Bookings</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/"}>
              <AiOutlineHeart />
              <span>Wish List</span>
            </NavLink>
          </li>
          <li>
            <hr />
            <NavLink onClick={handleSignOut} to={"/"}>
              <HiMiniLockOpen />
              <span>Sign Out</span>
            </NavLink>
            <hr />
          </li>
        </ul>
      </div>
      <h4>Need Help?</h4>
      <ul>
        <li>
          <Link to={"tel:1-634-567-34"}>
            <BsFillTelephoneFill />
            <span>1-634-567-34</span>
          </Link>
        </li>
        <li>
          <Link to={"mailto: contact@traveltourtheme.co"}>
            <HiOutlineMail /> <span>help@traveltour.com</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default UserMenu;
