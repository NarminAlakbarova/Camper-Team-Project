import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/header/logo.png";
import "./index.scss";
import { Dropdown, Space } from "antd";
import DropdownPages from "../../components/DropdownPages";

const items = [
  {
    label: <NavLink to={"signIn"}>Sign In</NavLink>,
    key: "1",
  },
  {
    label: <NavLink to={"signUp"}>Sign Up</NavLink>,
    key: "2",
  },
];

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
              <DropdownPages />
            </li>
            <li>
              <NavLink to={"contact"}>Contact</NavLink>
            </li>
          </ul>
          <Dropdown
            menu={{
              items,
            }}
          >
            <Link>
              <Space>Join Us</Space>
            </Link>
          </Dropdown>
        </nav>
      </div>
    </header>
  );
};

export default Header;
