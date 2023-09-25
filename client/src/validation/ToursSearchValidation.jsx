import * as Yup from "yup";

export const ToursSearchValidation = Yup.object().shape({
  keyword: Yup.string().required("Keyword must be required!"),
  duration: Yup.string().required("Select duration day!"),
  minPrice: Yup.string().required("Min Prices required!"),
  maxPrice: Yup.string().required("Max Price required!"),
});
