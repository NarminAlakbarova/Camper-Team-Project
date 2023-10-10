import { Field, Form, Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addEnquiry } from "../../redux/usersDataSlice";

const EnquiryForm = ({ user, tour }) => {
  const userEnquiry = user?.enquiry;
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    let enquiryValues = userEnquiry
      ? [...userEnquiry, { ...values, tourTitle: tour?.tourTitle }]
      : [{ ...values, tourTitle: tour?.tourTitle }];
    dispatch(addEnquiry({ enquiryValues, userId: user?.id }));
  };
  
  return (
    <Formik
      initialValues={{
        fullName: "",
        email: "",
        enquiry: "",
      }}
      onSubmit={(values, actions) => (
        handleSubmit(values), actions.resetForm()
      )}
    >
      <Form>
        <label htmlFor="fullName">Full Name*</label>
        <Field type="text" name="fullName" id="fullName" required />
        <label htmlFor="email">Email Address*</label>
        <Field type="email" name="email" id="email" required />
        <label htmlFor="enquiry">Your Enquiry*</label>
        <Field as="textarea" name="enquiry" id="enquiry" rows="5" required />
        <Field type="checkbox" name="accept" id="accept" required />
        <span className="checkbox-text">
          * I agree with <Link to={""}>Terms of Service</Link> and{" "}
          <Link to={""}>Privacy Statement</Link>.
        </span>
        <button type="submit">SUBMIT ENQUIRY</button>
      </Form>
    </Formik>
  );
};

export default EnquiryForm;
