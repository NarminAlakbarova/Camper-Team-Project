import React from 'react'
import { Form, Formik } from 'formik'
import InputFeilds from './InputField'
import {v4 as uuid} from "uuid"
import { validate } from '../../../validation'
import { useDispatch} from 'react-redux'
import { addUser } from '../../../redux/usersDataSlice'

const SignUpForm = () => {
  const dispatch=useDispatch()
  return (
    <Formik
      initialValues={{
        userName: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
        country: "",
        accept: false,
      }}
      validationSchema={validate}
      onSubmit={(values,actions) => (
        console.log(values),
        dispatch(addUser({ ...values, id: uuid(), isAdmin: false })),
        actions.resetForm()
      )}
    >
        <Form>
            <div className="sign-up-form-content row">
                <div className="col col-12 col-md-6 form-left">
                <InputFeilds type="text" name="userName" id="userName" label="Username" />
                <InputFeilds type="text" name="firstName" id="firstName" label="First Name" />
                <InputFeilds type="text" name="lastName" id="lastName" label="Last Name"/>
                <InputFeilds type="email" name="email" id="email" label="Email"/>
                </div>
                <div className="col col-12 col-md-6 form-right">
                <InputFeilds type="number" name="phone" id="phone" label="Phone"/>
                <InputFeilds type="password" name="password" id="password" label="Password"/>
                <InputFeilds type="password" name="confirmPassword" id="confirmPassword" label="Confirm Password" />
                <p className='title-text-country'>Country</p>
                <InputFeilds type="select" name="country" label="Country"/>
                </div>
            </div>
            <InputFeilds type="checkbox" name="accept" id="accept" label="* Creating an account means you're okay with our Terms of Service and Privacy Statement."/>
            <button className="submit-btn" type="submit">Sign Up</button>
        </Form>
    </Formik>
  )
}

export default SignUpForm