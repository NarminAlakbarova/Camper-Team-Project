import React from "react";
import "./modal.scss";
import { Link } from "react-router-dom";
import { MdOutlineClose } from "react-icons/md";
const ModalLogin = ({ handleModalClick }) => {
  return (
    <div id="login-modal">
      <div className="container">
        <div className="login-modal">
          <div className="login-modal-content">
            <div className="login-header">
              <h5>Login</h5>
              <div className="close-icon">
                <MdOutlineClose style={{fontSize:"24px"}} onClick={()=>handleModalClick()}/>
              </div>
            </div>
            <form action="">
            <div className="top">
            <div className="form-group">
                <label htmlFor="">Username or E-mail</label>
                <input type="text" />
              </div>
              <div className="form-group">
                <label htmlFor="">Password</label>
                <input type="password" />
              </div>
            </div>
              <button>Sign in</button>
              <Link className="forget-password">Forget password?</Link>
            </form>
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
