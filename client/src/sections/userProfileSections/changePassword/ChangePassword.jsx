import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { Form, Formik } from "formik";
import { UserPasswordValidation } from "../../../validation/UserPasswordValidation";
import { UserContext } from "../../../context/UserProvider";
import { useDispatch } from "react-redux";
import { updateUser } from "../../../redux/usersDataSlice";
import PasswordInpField from "./PasswordInpField";

const ChangePassword = () => {
  const [errorMsg, setErrorMsg] = useState(null);
  const { checkUser, setCheckUser } = useContext(UserContext);
  const dispatch = useDispatch();

  const handleUpdatePassword = (values) => {
    setErrorMsg(null);
    dispatch(updateUser({ ...checkUser, password: values.newPassword }));
    setCheckUser({ ...checkUser, password: values.newPassword });
  };
  return (
    <div className="user-dashboard-right edit-profile">
      <p className="page-path">
        <Link to="/userProfile/dashboard">
          Dashboard
          <IoIosArrowForward />
        </Link>{" "}
        Change Password
      </p>
      <Formik
        initialValues={{
          oldPassword: "",
          newPassword: "",
          confirmPassword: "",
        }}
        validationSchema={UserPasswordValidation}
        onSubmit={(values, actions) =>
          values.oldPassword == checkUser?.password
            ? (handleUpdatePassword(values), actions.resetForm())
            : setErrorMsg(true)
        }
      >
        <Form>
          <PasswordInpField
            type={"password"}
            name={"oldPassword"}
            id={"oldPassword"}
            label={"Old Password *"}
            errorMsg={errorMsg ? "Old Password is not correct !" : ""}
          />
          <PasswordInpField
            type={"password"}
            name={"newPassword"}
            id={"newPassword"}
            label={"New Password *"}
          />
          <PasswordInpField
            type={"password"}
            name={"confirmPassword"}
            id={"confirmPassword"}
            label={"Confirm Password *"}
          />
          <button className="update-password-btn" type="submit">
            Update Password
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ChangePassword;
