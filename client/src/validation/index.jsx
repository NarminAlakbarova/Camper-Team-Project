import * as Yup from "yup";

export const validate = Yup.object().shape({
  userName: Yup.string()
    .min(2, "User Name must be 2 or more characters!")
    .max(10, "User Name must be 10 or less!")
    .required("User Name must be required!"),
  firstName: Yup.string()
    .min(2, "First Name must be 2 or more characters!")
    .max(10, "First Name must be 10 or less!")
    .required("First Name must be required!"),
  lastName: Yup.string()
    .min(2, "Last Name must be 2 or more characters!")
    .max(10, "Last Name must be 10 or less!")
    .required("Last Name must be required!"),
  email: Yup.string()
    .min(2, "Email must be 2 or more characters!")
    .max(15, "Email must be 15 or less characters!"),
  phone: Yup.string()
    .min(7, "Phone must be 7 or more characters!")
    .max(10, "Phone must be 10 or less characters!"),
  password: Yup.string()
    .min(6, "Password must be 6 or more characters!")
    .max(10, "Password must be 10 or less characters!")
    .required("Password must be required!"),
  confirmPassword: Yup.string()
    .min(6, "Password must be 6 or more characters!")
    .max(10, "Password must be 10 or less characters!")
    .required("Password must be required!"),
  country: Yup.string()
    .min(2, "Country must be 2 or more characters!")
    .max(15, "Country must be 15 or less characters!"),
});
