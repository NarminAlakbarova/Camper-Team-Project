import { useContext } from "react";
import * as Yup from "yup";

export const UserPasswordValidation = Yup.object().shape({
    oldPassword: Yup.string()
    .required("Old Password must be required!"),
  newPassword: Yup.string()
    .min(6, "New Password must be 6 or more characters!")
    .max(10, "New Password must be 10 or less!")
    .required("New Password must be required!"),
  confirmPassword: Yup.string()
    .oneOf(
      [Yup.ref("newPassword"), null],
      "Confirm Password must match New password!"
    )
    .min(6, "Confirm Password must be 6 or more characters!")
    .max(10, "Confirm Password must be 10 or less!")
    .required("Confirm Password must be required!"),
});
