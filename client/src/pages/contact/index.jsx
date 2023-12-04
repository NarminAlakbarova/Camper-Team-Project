import React from "react";
import "./index.scss";
import HeroBanner from "../../sections/contactSections/HeroBanner";
import Location from "../../sections/contactSections/Location";
import Form from "../../sections/contactSections/Form";
import CustomHelmet from "../../components/CustomHelmet";

const ContactPage = () => {
  return (
    <>
      <CustomHelmet
        title={"Contact Page - Camper"}
        description={
          "Get in touch with us! Reach out via our contact form or visit our location for inquiries and assistance."
        }
      />
      <HeroBanner />
      <Form />
      <Location />
    </>
  );
};

export default ContactPage;
