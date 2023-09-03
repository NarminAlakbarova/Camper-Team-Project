import React, { useRef, useState } from "react";
import logo from "../../../assets/img/adminPage/logo.svg";
import adminImg from "../../../assets/img/homePage/user2.jpg";
import { VscBellDot, VscBell, VscChromeClose } from "react-icons/vsc";
import { CiLogout, CiSettings } from "react-icons/ci";
import { BsThreeDots } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { Dropdown } from "antd";
import { Link } from "react-router-dom";
import "./index.scss";

const Aside = () => {
  const [not, setNot] = useState(true);
  const [toggleTodo, setToggleTodo] = useState(false);
  const todoRef = useRef();
  const items = [
    {
      label: (
        <Link to="">
          <CiSettings />
          Settings
        </Link>
      ),
      key: "0",
    },
    {
      label: (
        <Link to="">
          <CiLogout />
          Logout
        </Link>
      ),
      key: "1",
    },
  ];
  const handleShowTodo = () => {
    toggleTodo
      ? ((todoRef.current.style.right = "-350px"),
       setToggleTodo(false))
      : ((todoRef.current.style.right = "0"), 
      setToggleTodo(true))
  };
  return (
    <>
      <div className="admin-header">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <nav>
          <div>
            <button className="search-btn">
              <BiSearch />{" "}
            </button>
            <input type="text" placeholder="Search now" />
          </div>
          <div>
            <Dropdown
              menu={{
                items,
              }}
              trigger={["click"]}
            >
              <button>{not ? <VscBellDot /> : <VscBell />}</button>
            </Dropdown>
            <Dropdown
              menu={{
                items,
              }}
              trigger={["click"]}
            >
              <img src={adminImg} alt="Admin Image" />
            </Dropdown>
            <button onClick={handleShowTodo}>
              <BsThreeDots />
            </button>
          </div>
        </nav>
      </div>
      <div ref={todoRef} className="todo-side-bar">
          <div className="todo-title">
            <span>TO DO LIST</span>
            <button onClick={handleShowTodo}>
              <VscChromeClose />
            </button>
          </div>
          <div className="add-todo">
            <input type="text" placeholder="Add To-Do" />
            <button>Add</button>
          </div>
          <ul>
            <li>
              <div>
                <input type="checkbox" name="" id="" />
                <span>hello</span>
              </div>
              <button>
                <VscChromeClose />
              </button>
            </li>
          </ul>
      </div>
    </>
  );
};

export default Aside;
