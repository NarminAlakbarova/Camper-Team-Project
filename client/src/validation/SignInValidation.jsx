import * as Yup from "yup";

export const SignInValidation = Yup.object().shape({
  userName: Yup.string()
    .min(2, "User Name must be 2 or more characters!")
    .max(10, "User Name must be 10 or less!")
    .required("User Name must be required!"),
  password: Yup.string()
    .min(6, "Password must be 6 or more characters!")
    .max(10, "Password must be 10 or less characters!")
    .required("Password must be required!"),
});
