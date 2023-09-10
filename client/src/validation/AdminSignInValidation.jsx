import * as Yup from "yup";

export const AdminSignInValidation = Yup.object().shape({
  password: Yup.string()
    .min(6, "Password must be 6 or more characters!")
    .max(10, "Password must be 10 or less characters!")
    .required("Password must be required!"),
  adminName: Yup.string()
    .min(2, "Admin Name must be 2 or more characters!")
    .max(10, "Admin Name must be 10 or less!")
    .required("Admin Name must be required!"),
});
