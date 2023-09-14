import { Field, useField } from "formik";
import React from "react";

const InputField = ({ label, ...props }) => {
  const [field] = useField(props);
  return (
    <>
      <label htmlFor="">{label}</label>
      {label == "News Content" ? (
        <Field as="textarea" {...props} {...field} />
      ) : (
        <Field {...props} {...field} />
      )}
    </>
  );
};

export default InputField;
