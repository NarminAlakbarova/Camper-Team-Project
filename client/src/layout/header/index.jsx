import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/header/logo.png";
import "./index.scss";
import DropdownComponent from "../../components/DropdownComponent";
import SelectCurrency from "../../components/SelectCurrency";

const Header = () => {
  return (
    <header>
      <div className="container">
        <nav>
          <Link to={"/"}>
            <img src={logo} alt="website logo" />
          </Link>
          <ul>
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"about"}>About</NavLink>
            </li>
            <li>
              <NavLink to={"allTours"}>All Tours</NavLink>
            </li>
            <li>
              <DropdownComponent dropdownSpace={"pages"} />
            </li>
            <li>
              <NavLink to={"contact"}>Contact</NavLink>
            </li>
          </ul>
          <div className="header-right">
            <SelectCurrency />
            <DropdownComponent dropdownSpace={"join-us"} />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
