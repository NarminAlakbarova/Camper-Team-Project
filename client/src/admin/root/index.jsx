import React, { useState } from "react";
import Aside from "../layouts/aside";
import { Outlet } from "react-router-dom";
import SignInAdmin from "../pages/signInAdmin";
import { Provider } from "react-redux";
import { store } from "../../redux/store";

const AdminRoot = () => {
  const [checkAdmin, setCheckAdmin] = useState(true);
  return (
    <Provider store={store}>
      {!checkAdmin ? (
        <SignInAdmin setCheckAdmin={setCheckAdmin} checkAdmin={checkAdmin}/>
      ) : (
        <div style={{display:"flex"}}>
          <Aside />
          <Outlet />
        </div>
      )}
    </Provider>
  );
};

export default AdminRoot;
