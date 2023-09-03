import React from "react";
import "./index.scss";
import { NavLink } from "react-router-dom";
import { GiCampingTent } from "react-icons/gi";
import { FaWpforms } from "react-icons/fa";
import { BsNewspaper } from "react-icons/bs";
import { GiWallet } from "react-icons/gi";
import { AiFillHome } from "react-icons/ai";

const Aside = () => {
  return (
    <div>
      <div
        className="header"
        style={{
          height: "50px",
          backgroundColor: "white",
          width: "100vw",
          position: "fixed",
          zIndex: "99999",
        }}
      ></div>
      <nav>
        <ul>
          <li>
            <NavLink to={"/admin/home"}>
              <AiFillHome />
              <p>Home</p>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/admin/allTours"}>
              <GiCampingTent />
              <p>All Tours</p>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/admin/feedback"}>
              <FaWpforms />
              <p>FeedBack</p>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/admin/news"}>
              <BsNewspaper />
              <p>News</p>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/admin/orders"}>
              <GiWallet />
              <p>Orders</p>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Aside;
