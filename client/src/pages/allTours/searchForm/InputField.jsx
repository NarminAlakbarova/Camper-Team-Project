import { ErrorMessage, Field, useField } from "formik";
import React from "react";

const InputField = ({ title, label, ...props }) => {
  const [field] = useField(props);
  const style = {
    fontSize: "14px",
    color: "red",
  };
  return (
    <div>
      {title != "Activity" && <p className="search-title">{title}</p>}
      {field.name == "duration" ? (
        <Field as={props.type} name={field.name}>
          <option value="">Any</option>
          <option value="1">1 Day Tour</option>
          <option value="2,4">2-4 Days Tour</option>
          <option value="5,7">5-7 Days Tour</option>
          <option value="7">7+ Days Tour</option>
        </Field>
      ) : (
        <Field id={field.name} {...props}/>
      )}
      {title=="Category" ? <label className="checkbox-label" htmlFor={field.name}>{label}</label> : "" }
      {title == "Activity" ? <label className="checkbox-label" htmlFor={field.name}>{label}</label> : ""}
      <ErrorMessage style={style} component="div" name={field.name} />
    </div>
  );
};

export default InputField;
