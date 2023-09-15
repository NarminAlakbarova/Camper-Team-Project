import * as Yup from "yup";

export const validate = Yup.object().shape({
  tourTitle: Yup.string()
    .min(2, "Tour Title must be 2 or more characters!")
    .max(12, "Tour Title must be 12 or less!")
    .required("Tour Title must be required"),
  tourLocation: Yup.string()
    .min(2, "Tour location name must be 2 or more!")
    .max(10, "Tour location name must be 10 or less!")
    .required("Tour location must be required"),
  tourReview: Yup.number()
    .max(10, "Tour review must be 10 or less!")
    .required("Tour review must be required"),
});
