import React, { useContext } from "react";
import ModalLogin from "../../components/modal/Modal";
import SignUpForm from "./signUpForm/SignUpForm";
import { ModalContext } from "../../context/ModalProvider";
import CustomHelmet from "../../components/CustomHelmet";
import "./index.scss";

const SignUpPage = () => {
  const { showModal, setShowModal } = useContext(ModalContext);

  return (
    <>
      <CustomHelmet
        title={"Sign Up Page - Camper"}
        description={
          "Sign up for an account on Camper. Join our community and enjoy exclusive features and benefits."
        }
      />
      <div>
        {showModal && <ModalLogin />}
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
              <p className="info-text">
                After creating an account, you'll be able to track your payment
                status, track the confirmation and you can also rate the tour
                after you finished the tour.
              </p>
              <SignUpForm />
              <hr />
              <h5>ALREADY A MEMBER?</h5>
              <button className="login-btn" onClick={() => setShowModal(true)}>
                LOGIN
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
