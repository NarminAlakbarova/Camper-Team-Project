import React from 'react'
import "./index.scss";
import HeroBanner from '../../sections/contactSections/HeroBanner'
import Location from '../../sections/contactSections/Location';
import Form from '../../sections/contactSections/Form';

const ContactPage = () => {
  return (
    <>
      <HeroBanner/>
      <Form/>
      <Location/>
    </>
  )
}

export default ContactPage