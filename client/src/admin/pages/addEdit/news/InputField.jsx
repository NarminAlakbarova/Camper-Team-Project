import { Field, useField } from "formik";
import React from "react";

const InputField = ({ label, ...props }) => {
  return (
    <>
      <label htmlFor="">{label}</label>
      {label == "News Content" ? (
        <Field as="textarea" {...props} />
      ) : (
        <Field {...props} />
      )}
      {/* {label=="News Image" ? <input {...props}  /> : ""} */}
    </>
  );
};

export default InputField;
