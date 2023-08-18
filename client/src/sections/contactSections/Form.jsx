import React, { useState } from "react";

const Form = () => {
  const [inputValue, setInputValue] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    setInputValue({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };
  const disabledBtn =
    !inputValue.name ||
    !inputValue.email ||
    !inputValue.subject ||
    !inputValue.message;
  return (
    <div id="form">
      <div className="container">
        <div className="title">
            <h3>Leave us your info</h3>
            <p>and we will get back to you</p>
            <div className="line"></div>
        </div>
        <div className="row">
          <div className="col-lg-2 col-md-1"></div>
          <div className="col-lg-8 col-md-10">
            <form action="" onSubmit={handleSubmit}>
              <input
                type="text"
                value={inputValue.name}
                onChange={(e) =>
                  setInputValue({ ...inputValue, name: e.target.value })
                }
                placeholder="Full Name*"
              />
              <input
                type="email"
                value={inputValue.email}
                onChange={(e) =>
                  setInputValue({ ...inputValue, email: e.target.value })
                }
                placeholder="Email*"
              />
              <input
                type="text"
                value={inputValue.subject}
                onChange={(e) =>
                  setInputValue({ ...inputValue, subject: e.target.value })
                }
                placeholder="Subject*"
              />
              <textarea
                name=""
                id=""
                cols="30"
                rows="3"
                onChange={(e) =>
                  setInputValue({ ...inputValue, message: e.target.value })
                }
                placeholder="Message*"
              ></textarea>
              <button type="submit" disabled={disabledBtn}>
                Submit Now
              </button>
            </form>
          </div>
          <div className="col-lg-2 col-md-1"></div>
        </div>
      </div>
    </div>
  );
};

export default Form;
