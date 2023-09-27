import React, { createContext, useState } from "react";

export const CurrencyContext = createContext();

const CurrencyProvider = ({ children }) => {
  const [currency, setCurrency] = useState("$");
  const providerValue = {
    currency,
    setCurrency,
  };
  return (
    <CurrencyContext.Provider value={providerValue}>
      {children}
    </CurrencyContext.Provider>
  );
};

export default CurrencyProvider;
