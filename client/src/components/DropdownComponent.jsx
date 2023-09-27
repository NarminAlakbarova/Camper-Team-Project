import { Dropdown, Space } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineUser } from "react-icons/hi2";

const DropdownComponent = ({ dropdownSpace }) => {
  let items =
    dropdownSpace == "pages"
      ? [
          {
            label: <Link to={"blog"}>Blog</Link>,
            key: "1",
          },
          {
            label: <Link to={"gallery"}>Gallery</Link>,
            key: "2",
          },
        ]
      : [
          {
            label: <Link to={"/userProfile/dashboard"}>Dashboard</Link>,
            key: "1",
          },
          {
            label: <Link to={"/userProfile/editProfile"}>Edit Profile</Link>,
            key: "2",
          },
        ];
  return (
    <Dropdown
      menu={{
        items,
      }}
      trigger={["click"]}
    >
      <div>
        <Space>
          {dropdownSpace == "pages" ? (
            "Pages"
          ) : (
            <button className="user-log-out">
              <HiOutlineUser />
            </button>
          )}
        </Space>
      </div>
    </Dropdown>
  );
};

export default DropdownComponent;
