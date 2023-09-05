import * as Yup from "yup";
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

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
    .email("Invalid email")
    .required("Email must be required!"),
  phone: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Phone Number is required"),
  password: Yup.string()
    .min(6, "Password must be 6 or more characters!")
    .max(10, "Password must be 10 or less characters!")
    .required("Password must be required!"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Confirm Password must match password!")
    .min(6, "Password must be 6 or more characters!")
    .max(10, "Password must be 10 or less characters!")
    .required("Password must be required!"),
  country: Yup.string().required("Country must be required!"),
  accept: Yup.boolean().oneOf([true], "Please check the agreement"),
  adminName: Yup.string()
    .min(2, "Admin Name must be 2 or more characters!")
    .max(10, "Admin Name must be 10 or less!")
    .required("Admin Name must be required!"),
});
