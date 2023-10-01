import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Form, Formik } from "formik";
import { IoIosArrowForward } from "react-icons/io";
import { UserContext } from "../../../context/UserProvider";
import { UserUpdateValidation } from "../../../validation/UserUpdateValidation";
import { updateUser } from "../../../redux/usersDataSlice";
import { useDispatch } from "react-redux";
import { Stack } from "@mui/material";
import Alert from "@mui/material/Alert";
import EditProfileInpField from "./EditProfileInpField";

const EditProfile = () => {
  const [warningMsg, setWarningMsg] = useState(null);
  const [updatedMsg, setUpdatedMsg] = useState(null);
  const { checkUser, setCheckUser } = useContext(UserContext);
  const dispatch = useDispatch();
  const showWarningMsg = () => {
    setWarningMsg(true);
    setTimeout(() => {
      setWarningMsg(null);
    }, 2000);
  };
  const handleUpdateUser = (values) => {
    dispatch(updateUser({ ...values, id: checkUser?.id }));
    setCheckUser({
      ...values,
      id: checkUser?.id,
      password: checkUser?.password,
      accept: checkUser?.accept,
      isAdmin: checkUser?.isAdmin,
    });
    setUpdatedMsg(true);
    setTimeout(() => {
      setUpdatedMsg(null);
    }, 2000);
  };
  return (
    <div className="edit-profile">
      {warningMsg && (
        <Stack
          spacing={2}
          style={{
            position: "fixed",
            left: "43%",
            top: " 15%",
          }}
        >
          <Alert severity="warning">No fields were changed !</Alert>
        </Stack>
      )}
      {updatedMsg && (
        <Stack
          spacing={2}
          style={{
            position: "absolute",
            left: "43%",
            margin: "20px 0",
          }}
        >
          <Alert severity="success">Profile Updated !</Alert>
        </Stack>
      )}
      <p className="page-path">
        <Link to="/userProfile/dashboard">
          Dashboard
          <IoIosArrowForward />
        </Link>
        Edit Profile
      </p>
      <Formik
        initialValues={
          checkUser
            ? {
                userName: checkUser?.userName,
                firstName: checkUser?.firstName,
                lastName: checkUser?.lastName,
                email: checkUser?.email,
                phone: checkUser?.phone,
                country: checkUser?.country,
              }
            : {
                userName: "",
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                country: "",
              }
        }
        validationSchema={UserUpdateValidation}
        onSubmit={(values) => {
          return values.userName == checkUser?.userName &&
            values.firstName == checkUser?.firstName &&
            values.lastName == checkUser?.lastName &&
            values.email == checkUser?.email &&
            values.phone == checkUser?.phone &&
            values.country == checkUser?.country
            ? showWarningMsg()
            : handleUpdateUser(values);
        }}
      >
        <Form>
          <EditProfileInpField
            type="text"
            label="Username *"
            name="userName"
            id="userName"
          />
          <EditProfileInpField
            type="text"
            label="First Name *"
            name="firstName"
            id="firstName"
          />
          <EditProfileInpField
            type="text"
            label="Last Name *"
            name="lastName"
            id="lastName"
          />
          <EditProfileInpField
            type="email"
            label="Email *"
            name="email"
            id="email"
          />
          <EditProfileInpField
            type="phone"
            label="Phone *"
            name="phone"
            id="phone"
          />
          <EditProfileInpField
            type="select"
            label="Country *"
            name="country"
            id="country"
          />
          <button type="submit">Update Profile</button>
        </Form>
      </Formik>
    </div>
  );
};

export default EditProfile;
