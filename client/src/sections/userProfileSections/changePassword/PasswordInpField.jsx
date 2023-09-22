import { ErrorMessage, Field } from "formik";
import React from "react";

const PasswordInpField = ({ errorMsg, label, ...props }) => {
  const style = {
    fontSize: "14px",
    color: "red",
  };
  return (
    <div className="edit-profile-form-field">
      <label htmlFor={props.id}>{label}</label>
      <div className="edit-input">
        <Field autoComplete="off" {...props} />
        {errorMsg ? (
          <div style={style}>{errorMsg}</div>
        ) : (
          <ErrorMessage style={style} component="div" name={props.name} />
        )}
      </div>
    </div>
  );
};

export default PasswordInpField;
