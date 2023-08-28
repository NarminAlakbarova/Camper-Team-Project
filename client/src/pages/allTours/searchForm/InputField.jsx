import { Field, useField } from "formik";
import React from "react";

const InputField = ({ title, label, ...props }) => {
  const [field] = useField(props);
//   console.log(props.type);
  return (
    <div>
      {title != "Activity" && <p>{title}</p>}
      {/* <input id={field.name} {...props} /> */}
      {field.name == "duration" ? (
        <Field as={props.type} name={field.name}>
          <option value="">Any</option>
          <option value="1">1 Day Tour</option>
          <option value="2,4">2-4 Days Tour</option>
          <option value="5,7">5-7 Days Tour</option>
          <option value="7">7+ Days Tour</option>
        </Field>
      ) : (
        <Field id={field.name} {...props} />
      )}
      {title == "Activity" ? <label htmlFor={field.name}>{label}</label> : null}
    </div>
  );
};

export default InputField;
