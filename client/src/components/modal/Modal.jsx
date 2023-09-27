import React, { useContext, useState } from "react";
import "./modal.scss";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineClose } from "react-icons/md";
import InputFeilds from "../form/InputFeilds";
import { Form, Formik } from "formik";
import { SignInValidation } from "../../validation/SignInValidation";
import { UserContext } from "../../context/UserProvider";
import { useSelector } from "react-redux";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";


const ModalLogin = ({ handleModalClick, setShowModal }) => {

  const { checkUser, setCheckUser } = useContext(UserContext);
  const usersData = useSelector((state) => state.usersData.data);
  const [error, setError] = useState(null);


  const handleSubmit = (value) => {
    console.log(value);
    const checkAllUser = usersData.find(
      (item) =>
        (item.userName == value.userName || item.email == value.userName) &&
        item.password === value.password
    );

    if (checkAllUser) {
      setCheckUser(checkAllUser);
      setShowModal(false);
    } else {
      setError("Invalid username, email, or password.");
      setTimeout(() => {
        setError(null);
      }, 2000);
    }
  };
  return (
    <div id="login-modal">
      {error && (
        <Stack
          spacing={2}
          style={{
            width: "65%",
            position: "absolute",
            left: "17.3%",
            margin: "20px 0",
            zIndex:'5555'
          }}
        >
          <Alert severity="error">{error}</Alert>
        </Stack>
      )}
      <div className="container">
        <div className="login-modal">
          <div className="login-modal-content">
            <div className="login-header">
              <h5>Login</h5>
              <div className="close-icon">
                <MdOutlineClose
                  style={{ fontSize: "24px" }}
                  onClick={() => handleModalClick()}
                />
              </div>
            </div>
            <Formik
              initialValues={{
                userName: "",
                password: "",
              }}
              validationSchema={SignInValidation}
              onSubmit={(values) => handleSubmit(values)}
            >
              {({ errors, touched }) => (
                <Form>
                  <div className="top">
                    <InputFeilds
                      label="Username or E-mail"
                      type="text"
                      name="userName"
                    />
                    <InputFeilds
                      label="Password"
                      type="password"
                      name="password"
                    />
                  </div>
                  <button type="submit">Sign in</button>
                  <Link className="forget-password">Forget password?</Link>
                </Form>
              )}
            </Formik>

            <div className="login-footer">
              <h6>DO NOT HAVE AN ACCOUNT?</h6>
              <Link
                className="create-account"
                onClick={() => setShowModal(false)}
                to={"signUp"}
              >
                CREATE AN ACCOUNT
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalLogin;
