import { Dropdown, Space } from "antd";
import React from "react";
import { Link, NavLink } from "react-router-dom";

const items = [
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
];
const DropdownPages = () => {
  return (
    <Dropdown
      menu={{
        items,
      }}
    >
      <Link>
        <Space>Pages</Space>
      </Link>
    </Dropdown>
  );
};

export default DropdownPages;
