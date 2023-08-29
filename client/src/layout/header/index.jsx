import React, { useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { RiMenuFill } from "react-icons/ri";
import { FaArrowUp } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";
import DropdownComponent from "../../components/DropdownComponent";
import SelectCurrency from "../../components/SelectCurrency";
import logo from "../../assets/header/logo.png";
import "./index.scss";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [togglePages, setTogglePages] = useState(false);

  const menuRef = useRef();
  const pagesRef = useRef();
  const headerRef = useRef();
  const arrowUpRef = useRef();

  const scrollFunc = () => {
    document.documentElement.scrollTop >= 110
      ? ((arrowUpRef.current.style.display = "flex"),
        (headerRef.current.style.position = "fixed"))
      : ((arrowUpRef.current.style.display = "none"),
        (headerRef.current.style.position = "relative"));
  };arrowUpRef
  const handleScrollTop = () => {
    document.documentElement.scrollTop = 0;
  };
  const showMenu = () => {
    if (!toggleMenu) {
      menuRef.current.style.width = "80%";
      setToggleMenu(true);
    } else {
      menuRef.current.style.width = "0";
      setToggleMenu(false);
    }
  };
  const showPages = () => {
    if (!togglePages) {
      pagesRef.current.style.height = "180px";
      setTogglePages(true);
    } else {
      pagesRef.current.style.height = "0";
      setTogglePages(false);
    }
  };

  window.onscroll = () => {
    scrollFunc();
  };

  return (
    <>
      <header ref={headerRef}>
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
              <button className="menu-btn" onClick={showMenu}>
                <RiMenuFill />
              </button>
            </div>
          </nav>
        </div>
      </header>
      <div id="menu" ref={menuRef}>
        <div className="container">
          <div className="menu-content">
            <button className="close-btn" onClick={showMenu}>
              <AiOutlineClose />
            </button>
            <ul className="menu-content-items">
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <hr />
              <li>
                <NavLink to={"about"}>About</NavLink>
              </li>
              <hr />
              <li>
                <NavLink to={"allTours"}>All Tours</NavLink>
              </li>
              <hr />
              <li onClick={showPages}>
                Pages {togglePages ? <BiSolidUpArrow /> : <BiSolidDownArrow />}
                <ul ref={pagesRef}>
                  <li>
                    <NavLink to={"tourFull"}>Tour Full</NavLink>
                  </li>
                  <hr />
                  <li>
                    <NavLink to={"blog"}>Blog</NavLink>
                  </li>
                  <hr />
                  <li>
                    <NavLink to={"gallery"}>Gallery</NavLink>
                  </li>
                </ul>
              </li>
              <hr />
              <li>
                <NavLink to={"contact"}>Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="arrow-up" ref={arrowUpRef} onClick={handleScrollTop}>
        <FaArrowUp />
      </div>
    </>
  );
};

export default Header;
