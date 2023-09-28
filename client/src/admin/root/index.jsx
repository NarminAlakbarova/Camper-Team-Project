import React, { useEffect, useState } from "react";
import Aside from "../layouts/aside";
import { Outlet } from "react-router-dom";
import SignInAdmin from "../pages/signInAdmin";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "../../redux/store";
import { getUsersData } from "../../redux/usersDataSlice";

const AdminRoot = () => {
  const [checkAdmin, setCheckAdmin] = useState(() => {
    const savedAdmin = localStorage.getItem("savedAdmin");
    return savedAdmin ? JSON.parse(savedAdmin) : null;
  });

  const setAdmin = (newAdmin) => {
    setCheckAdmin(newAdmin);
    localStorage.setItem("savedAdmin", JSON.stringify(newAdmin));
  };

  return (
    <Provider store={store}>
      {!checkAdmin ? (
        <SignInAdmin setAdmin={setAdmin} />
      ) : (
        <div style={{ display: "flex" }}>
          <Aside setAdmin={setAdmin} />
          <Outlet />
        </div>
      )}
    </Provider>
  );
};

export default AdminRoot;
