import { Dropdown, Space } from "antd";
import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserProvider";

const DropdownComponent = ({ dropdownSpace, handleModalClick }) => {
  const { checkUser, setCheckUsers } = useContext(UserContext);
  const navigate=useNavigate()
  const handleUSersLogOut = () => {
    localStorage.removeItem("checkUser");

    setCheckUsers(null);
  };
  let items = "";
  dropdownSpace == "pages"
    ? (items = [
        {
          label: <NavLink to={"tourFull"}>Tour Full</NavLink>,
          key: "1",
        },
        {
          label: <NavLink to={"blog"}>Blog</NavLink>,
          key: "2",
        },
        {
          label: <NavLink to={"gallery"}>Gallery</NavLink>,
          key: "3",
        }
      ])
    : (items = [
        {
          label: <NavLink onClick={() => handleModalClick()}>Sign In</NavLink>,
          key: "1",
        },
        {
          label: <NavLink onClick={() => handleUSersLogOut()}>Log out</NavLink>,
          key: "2",
        },
      ]);
  return (
    <Dropdown
      menu={{
        items,
      }}
      trigger={['click']}
    >
      <div>
        <Space>
          {dropdownSpace == "pages" ? (
            "Pages"
          ) : (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
              <button
                className="username-btn"
                onClick={() => navigate("userProfile/dashboard")}
              >
                {checkUser ? checkUser.userName : ""}
              </button>
            </>
          )}
        </Space>
      </div>
    </Dropdown>
  );
};

export default DropdownComponent;
