import React, { createContext, useState } from "react";
export const UserContext = createContext();
const UserProvider = ({ children }) => {
  const [checkUser, setCheckUser] = useState();
  console.log(checkUser);
  const providerValue = {
    checkUser,
    setCheckUser,
  };
  return (
    <UserContext.Provider value={providerValue}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
