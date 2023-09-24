import React, { useContext } from "react";
import { GrNotes } from "react-icons/gr";
import { BookingContext } from "../../context/BookingProvider";
import { countriesList } from "../../data/countries";
const ContactDetails = ({ pageChanges, setPageChanges }) => {
  const { bookinginfo, setBookingInfo } = useContext(BookingContext);
  console.log(bookinginfo);
  const handleInputsChanges = (e) => {
    const { name, value } = e.target;
    name === "notes"
      ? setBookingInfo({
          ...bookinginfo,
          notes: value,
        })
      : setBookingInfo({
          ...bookinginfo,
          contactDetails: {
            ...bookinginfo.contactDetails,
            [name]: value,
          },
        });
  };
  const handleFormGroup = (label, type, placeholder, value, name) => {
    return (
      <div className="form-group">
        <label htmlFor="">{label}</label>
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          name={name}
          onChange={handleInputsChanges}
          required
        />
      </div>
    );
  };
  return (
    <>
      <div id="contact-details">
        <h4>Contact Details</h4>
        <form action="">
          {handleFormGroup(
            "First Name*",
            "text",
            "Alika",
            bookinginfo.contactDetails.firstName,
            "firstName"
          )}
          {handleFormGroup(
            "Last Name*",
            "text",
            "Porter",
            bookinginfo.contactDetails.lastName,
            "lastName"
          )}
          {handleFormGroup(
            "Email*",
            "email",
            "rysovykoka@mailinator.com",
            bookinginfo.contactDetails.email,
            "email"
          )}
          {handleFormGroup(
            "Phone*",
            "phone",
            "+1 (142) 336-1686",
            bookinginfo.contactDetails.phone,
            "phone"
          )}
          <div className="form-group">
            <label htmlFor="">Country*</label>
            <select
              name="country"
              id=""
              value={bookinginfo.contactDetails.coutry}
              onChange={handleInputsChanges}
              required
            >
              {countriesList.map((country) => (
                <option value={country}>{country}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="">Adress</label>
            <textarea
              name="adress"
              id=""
              cols="30"
              rows="5"
              value={bookinginfo.contactDetails.adress}
              onChange={handleInputsChanges}
            ></textarea>
          </div>
        </form>
      </div>
      <div className="line"></div>
      <div id="notes">
        <div className="title">
          <GrNotes />
          <h4>Notes</h4>
        </div>
        <div className="form-group">
          <label htmlFor="">Additional Notes</label>
          <textarea
            name="notes"
            id=""
            cols="30"
            rows="5"
            value={bookinginfo.notes}
            onChange={handleInputsChanges}
          ></textarea>
        </div>
        <button type="submit" onClick={() => setPageChanges(true)}>
          Next Step
        </button>
      </div>
    </>
  );
};

export default ContactDetails;
