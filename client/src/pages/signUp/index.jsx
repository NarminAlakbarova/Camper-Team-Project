import React, { useState } from "react";
import { Field, Form, Formik } from "formik";
import ModalLogin from "../../components/modal/Modal";
import { countriesList } from "../../data/countries";
import "./index.scss";

const SignUpPage = () => {
  const [showModal, setShowModal] = useState(false);
  const handleModalClick = () => {
    showModal ? setShowModal(false) : setShowModal(true);
  };
  return (
    <div>
      {showModal && <ModalLogin handleModalClick={handleModalClick} />}
      <div id="hero-banner-sign-up">
        <div className="container">
          <div className="hero-banner-sign-up">
            <p className="hero-text">Sign Up</p>
          </div>
        </div>
      </div>
      <div id="sign-up-form">
        <div className="container">
          <div className="sign-up-form">
            <p className="info-text">After creating an account, you'll be able to track your payment status, track the confirmation and you can also rate the tour after you finished the tour.</p>
            <Formik
              initialValues={{
                username: "",
                firstName:"",
                lastName:"",
                email:"",
                phone:"",
                password:"",
                confirmPassword:"",
                country:"",
                accept:false,
              }}
              onSubmit={(values) => console.log(values)}
            >
              <Form>
                <div className="sign-up-form-content row">
                  <div className="col col-12 col-md-6 form-left">
                  <label htmlFor="username">Username</label>
                  <Field type="text" name="username" id="username" />
                  <label htmlFor="firstName">First Name</label>
                  <Field type="text" name="firstName" id="firstName" />
                  <label htmlFor="lastName">Last Name</label>
                  <Field type="text" name="lastName" id="lastName" />
                  <label htmlFor="email">Email</label>
                  <Field type="email" name="email" id="email" />
                  </div>
                  <div className="col col-12 col-md-6 form-right">
                  <label htmlFor="phone">Phone</label>
                  <Field type="number" name="phone" id="phone" />
                  <label htmlFor="password">Password</label>
                  <Field type="password" name="password" id="password" />
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <Field type="password" name="confirmPassword" id="confirmPassword" />
                  <label htmlFor="country">Country</label>
                  <Field as={"select"} name={'country'}>
                    {countriesList.map(item=><option value={item}>{item}</option>)}
                  </Field>
                  </div>
                </div>
                <Field type="checkbox" name="accept" id="accept"/>
                <label className="info-text" htmlFor="accept">* Creating an account means you're okay with our Terms of Service and Privacy Statement.</label>
                <button className="submit-btn" type="submit">Sign Up</button>
              </Form>
            </Formik>
            <hr />
            <h5>ALREADY A MEMBER?</h5>
            <button className="login-btn" onClick={handleModalClick}>LOGIN</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
