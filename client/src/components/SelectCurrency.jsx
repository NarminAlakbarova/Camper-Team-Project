import { Select } from "antd";
import React from "react";

const SelectCurrency = () => {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
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
