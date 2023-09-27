import { Field, useField } from "formik";
import React from "react";

const InputField = ({ label, ...props }) => {
  return (
    <>
      <label htmlFor="">{label}</label>
      {label == "News Content" ? (
        <Field as="textarea" {...props} required/>
      ) : (
        <Field {...props} required/>
      )}
    </>
  );
};

export default InputField;
