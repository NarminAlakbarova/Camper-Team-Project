import React from "react";
import { ErrorMessage, Field, useField } from "formik";
import { countriesList } from "../../../data/countries";

const InputFeilds = ({ label, ...props }) => {
  const [field] = useField(props);
  const style = {
    fontSize: "14px",
    color: "red",
  };
  return (
    <div className="sign-up-field">
      {field.name != "country" && field.name != "accept" && (
        <label htmlFor={field.name}>{label}</label>
      )}
      {field.name == "country" ? (
        <Field as={props.type} name={field.name}>
          {countriesList.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </Field>
      ) : (
        <Field autoComplete="off" {...props} {...field} />
      )}
      {field.name == "accept" && <label className="info-text" htmlFor={field.name}>{label}</label>}
      <ErrorMessage style={style} component="div" name={field.name} />
    </div>
  );
};

export default InputFeilds;
