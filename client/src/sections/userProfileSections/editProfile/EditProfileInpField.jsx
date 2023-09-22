import { ErrorMessage, Field } from "formik";
import React from "react";
import { countriesList } from "../../../data/countries";

const EditProfileInpField = ({ label, ...props }) => {
  const style = {
    fontSize: "14px",
    color: "red",
  };
  return (
    <div className="edit-profile-form-field">
      <label htmlFor={props.id}>{label}</label>
      <div className="edit-input">
        {props.name == "country" ? (
          <Field as={props.type} name={props.name}>
            {countriesList?.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </Field>
        ) : (
          <Field autoComplete="off" {...props} />
        )}
        <ErrorMessage style={style} component="div" name={props.name} />
      </div>
    </div>
  );
};

export default EditProfileInpField;
