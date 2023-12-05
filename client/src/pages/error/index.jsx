import React from "react";
import CustomHelmet from "../../components/CustomHelmet";

const ErrorPage = () => {
  return (
    <>
      <CustomHelmet
        title={"Error Page - Camper"}
        description={
          "Oops! Something went wrong. We apologize for the inconvenience. Please try again later."
        }
      />
      <div>ErrorPage</div>
    </>
  );
};

export default ErrorPage;
