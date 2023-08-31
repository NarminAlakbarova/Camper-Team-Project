import React from "react";
import "./modal.scss";
import { Link } from "react-router-dom";
import { MdOutlineClose } from "react-icons/md";
import InputFeilds from "../form/InputFeilds";
import { Form, Formik } from "formik";
import { validate } from "../../validation";
const ModalLogin = ({ handleModalClick }) => {
  return (
    <div id="login-modal">
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
              validationSchema={validate}
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
              <Link className="create-account">CREATE AN ACCOUNT</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalLogin;
