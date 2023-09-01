import React, { useState } from "react";
import Aside from "../layouts/aside";
import { Outlet } from "react-router-dom";
import SignIn from "../pages/signIn";

const AdminRoot = () => {
  const [checkAdmin, setCheckAdmin] = useState(false);
  return (
    <>
      {!checkAdmin ? (
        <SignIn setCheckAdmin={setCheckAdmin} checkAdmin={checkAdmin}/>
      ) : (
        <>
        
          <Aside />
          <Outlet />
        </>
      )}
    </>
  );
};

export default AdminRoot;
