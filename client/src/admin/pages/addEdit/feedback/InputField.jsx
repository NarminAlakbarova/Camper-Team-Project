import { ErrorMessage, Field, useField } from "formik";
import React from "react";

const InputField = ({ label, ...props }) => {
  const [field] = useField(props);
  return (
    <>
      <label>{label}</label>
      {label == "Feedback" ? (
        <Field as="textarea" {...props} {...field} required/>
      ) : (
        <Field {...props} {...field} required/>
      )}
      <ErrorMessage component="div" name={field.name} />
    </>
  );
};

export default InputField;
