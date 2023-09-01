import React, { useState } from "react";
import ModalLogin from "../../components/modal/Modal";
import SignUpForm from "./signUpForm/SignUpForm";
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
            <SignUpForm/>
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
