import React, { useState } from "react";
import Aside from "../layouts/aside";
import { Outlet } from "react-router-dom";
import SignIn from "../pages/signIn";
import { Provider } from "react-redux";
import { store } from "../../redux/store";

const AdminRoot = () => {
  const [checkAdmin, setCheckAdmin] = useState(true);
  return (
    <>
      <Provider store={store}>
        {!checkAdmin ? (
          <SignIn setCheckAdmin={setCheckAdmin} checkAdmin={checkAdmin} />
        ) : (
          <div style={{ display: "flex", columnGap: "100px" }}>
            <Aside />
            <Outlet  />
          </div>
        )}
      </Provider>
    </>
  );
};

export default AdminRoot;
