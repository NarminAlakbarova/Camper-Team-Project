import { ErrorMessage, useField } from "formik";
import React from "react";

const InputFeilds = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props);
  const style = {
    fontSize: "14px",
    color: "red",
  };
  return (
    <div className="form-group">
      <label htmlFor={field.name}>{label}</label>
      <input
        autoComplete="off"
        className={`${
          meta.touched && (meta.error ? "is-invalid" : "is-valid")
        }`}
        {...props}
        {...field}
      />
      <ErrorMessage style={style} component="div" name={field.name} />
    </div>
  );
};

export default InputFeilds;
