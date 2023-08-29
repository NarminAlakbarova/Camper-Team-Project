import { Dropdown, Space } from "antd";
import React from "react";
import {  NavLink } from "react-router-dom";

const DropdownComponent = ({ dropdownSpace,handleModalClick}) => {

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
        },
        {
          type: "divider",
        },
      ])
    : (items = [
        {
          label: <NavLink  onClick={()=>handleModalClick()}>Sign In</NavLink>,
          key: "1",
        },
        {
          label: <NavLink to={"signUp"}>Sign Up</NavLink>,
          key: "2",
        },
      ]);
  return (
    <Dropdown
      menu={{
        items,
      }}
    >
      <div>
        <Space>
          {dropdownSpace == "pages" ? (
            "Pages"
          ) : (
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
          )}
        </Space>
      </div>
    </Dropdown>
  );
};

export default DropdownComponent;
