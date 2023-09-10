import React from "react";

const ToursInputFeilds = ({ label, ...props }) => {
  return (
    <div className="form-group">
      <label htmlFor="">{label}</label>
      <input {...props}  />
    </div>
  );
};

export default ToursInputFeilds;
