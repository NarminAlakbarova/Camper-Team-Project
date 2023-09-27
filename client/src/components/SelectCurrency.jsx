import React, { useContext } from "react";
import { Select } from "antd";
import { useDispatch } from "react-redux";
import { changeCurrency } from "../redux/toursDataSlice";
import { CurrencyContext } from "../context/CurrencyProvider";

const SelectCurrency = () => {
  const { setCurrency } = useContext(CurrencyContext);
  const dispatch = useDispatch();
  const handleChange = (value) => {
    dispatch(changeCurrency(value));
    if (value == "USD") {
      setCurrency("$");
    } else {
      setCurrency(value);
    }
  };
  return (
    <Select
      defaultValue="USD"
      onChange={handleChange}
      options={[
        {
          value: "USD",
          label: "USD",
        },
        {
          value: "EUR",
          label: "EUR",
        },
        {
          value: "CHF",
          label: "CHF",
        },
      ]}
    />
  );
};

export default SelectCurrency;
