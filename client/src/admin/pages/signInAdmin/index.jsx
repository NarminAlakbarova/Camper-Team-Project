import React from "react";
import "./index.scss";
import logo from "../../../assets/header/logo.png";
import img from "../../../assets/img/contact/locationImg1.jpg";
import { FiUser } from "react-icons/fi";
import { AiOutlineLock } from "react-icons/ai";
import { Form, Formik } from "formik";
import { validate } from "../../../validation";
import InputFeilds from "../../../components/form/InputFeilds";
const SignInAdmin = ({ setCheckAdmin, checkAdmin }) => {
  console.log(checkAdmin);
  return (
    <div id="sign-in">
      <div className="sign-in">
        <div className="sign-in-left">
          {/* <img src={logo} alt="" /> */}
          <div className="title">
            <p>Welcome back!</p>
            <p>Happy to see you again!</p>
          </div>
          <Formik
            initialValues={{
              adminName: "",
              password: "",
            }}
            validationSchema={validate}
          >
            {({ errors, touched }) => (
              <Form>
                <InputFeilds
                  label="adminName"
                  type="text"
                  name="adminName"
                  prefix={<FiUser />}
                />
                <InputFeilds
                  label="password"
                  type="password"
                  name="password"
                  prefix={<AiOutlineLock />}
                />
                <div className="check-link">
                  <div className="checkbox">
                    <input type="checkbox" />
                    <p>Keep me signed in</p>
                  </div>
                  <a href="#">Forgot password?</a>
                </div>
                <button type="submit">Login</button>
              </Form>
            )}
          </Formik>
        </div>
        <div className="sign-in-right">
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SignInAdmin;
