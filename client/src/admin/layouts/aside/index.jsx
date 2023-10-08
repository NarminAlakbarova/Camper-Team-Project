import React, { useRef, useState } from "react";
import logo from "../../../assets/img/adminPage/logo.svg";
import adminImg from "../../../assets/img/homePage/user2.jpg";
import { VscBellDot, VscBell, VscChromeClose } from "react-icons/vsc";
import { CiLogout, CiSettings } from "react-icons/ci";
import { BsThreeDots, BsNewspaper } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { Dropdown } from "antd";
import { Link, NavLink } from "react-router-dom";
import { GiCampingTent, GiWallet } from "react-icons/gi";
import { FaWpforms } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { v4 as uuidv4 } from "uuid";
import "./index.scss";

const Aside = ({ setAdmin }) => {
  const [not, setNot] = useState(true);
  const [toggleTodo, setToggleTodo] = useState(false);
  const [allToDoItem, setAllToDoItem] = useState([]);
  const [toDoInputValue, setToDoInputValue] = useState({
    toDo: "",
    id: "",
  });
  const [selectedItems, setSelectedItems] = useState([]);
  const todoRef = useRef();
  const handleLogOutAdmin = () => {
    localStorage.removeItem("savedAdmin");
    setAdmin(null);
  };
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
        <Link to="" onClick={handleLogOutAdmin}>
          <CiLogout />
          Logout
        </Link>
      ),
      key: "1",
    },
  ];
  const handleShowTodo = () => {
    toggleTodo
      ? ((todoRef.current.style.right = "-350px"), setToggleTodo(false))
      : ((todoRef.current.style.right = "0"), setToggleTodo(true));
  };
  const handleToDoChanges = (e) => {
    setToDoInputValue({ ...toDoInputValue, [e.target.name]: e.target.value });
  };
  const handleToDoSubmit = () => {
    const newTodoItem = {
      toDo: toDoInputValue.toDo,
      id: uuidv4(),
    };
    setAllToDoItem([...allToDoItem, newTodoItem]);
    setToDoInputValue({ toDo: "", id: "" });
  };
  const handleToDoDelete = (id) => {
    setAllToDoItem(allToDoItem.filter((item) => item.id !== id));
  };

  const handleToDoClick = (id) => {
    const isSelected = selectedItems.includes(id);
    isSelected
      ? setSelectedItems(selectedItems.filter((itemId) => itemId !== id))
      : setSelectedItems([...selectedItems, id]);
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
              <BiSearch />
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
          <input
            name="toDo"
            value={toDoInputValue.toDo}
            type="text"
            placeholder="Add To-Do"
            onChange={(e) => handleToDoChanges(e)}
          />
          <button
            onClick={() => handleToDoSubmit()}
            disabled={!toDoInputValue.toDo}
          >
            Add
          </button>
        </div>
        <ul>
          {allToDoItem.map((item) => (
            <li key={item.id}>
              <div>
                <input
                  type="checkbox"
                  name=""
                  id=""
                  onClick={() => handleToDoClick(item.id)}
                />
                <span
                  className={
                    selectedItems.includes(item.id) ? "to-do-span" : ""
                  }
                >
                  {item.toDo}
                </span>
              </div>

              <button onClick={() => handleToDoDelete(item.id)}>
                <VscChromeClose />
              </button>
            </li>
          ))}
        </ul>
      </div>
      <nav className="sidebar-nav">
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
    </>
  );
};
export default Aside;
