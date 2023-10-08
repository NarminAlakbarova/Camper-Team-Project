import React, { useEffect } from "react";
import "./index.scss";
import logo from "../../../assets/header/logo.png";
import img from "../../../assets/img/contact/locationImg1.jpg";
import { FiUser } from "react-icons/fi";
import { AiOutlineLock } from "react-icons/ai";
import { Form, Formik } from "formik";
import InputFeilds from "../../../components/form/InputFeilds";
import { AdminSignInValidation } from "../../../validation/AdminSignInValidation";
import { useDispatch, useSelector } from "react-redux";
import { getUsersData } from "../../../redux/usersDataSlice";
import { useNavigate } from "react-router-dom";

const SignInAdmin = ({ setAdmin }) => {
  const allUsers = useSelector((state) => state.usersData.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //  const adminName=JSON.parse(localStorage.getItem("adminDetails"));

  useEffect(() => {
    dispatch(getUsersData());
  }, [dispatch]);
  const checkAllUsers = allUsers.map((user) => user.isAdmin);
  // setCheckAdmin(checkAllUsers);
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
            validationSchema={AdminSignInValidation}
            onSubmit={(values, actions) => {
              const checkInputs = allUsers.find(
                (user) =>
                  user.userName === values.adminName &&
                  user.password === values.password &&
                  user.isAdmin
              );

              checkInputs
                ? (setAdmin(checkInputs.userName), navigate("/admin/home"))
                : alert("you are not a admin");
            }}
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
