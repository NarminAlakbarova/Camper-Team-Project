import React, { useContext } from "react";
import { GrNotes } from "react-icons/gr";
import { BookingContext } from "../../context/BookingPRovider";

const PaymentDetails = () => {
  const { bookinginfo } = useContext(BookingContext);
  return (
    <>
      <div id="payment-details">
        <div className="details-container">
          <div className="contact-traveller">
            <div className="contact-details">
              <h4>Contact Details</h4>
              <div className="contact-group">
                <p>First Name :</p>
                <p>{bookinginfo.contactDetails.firstName}</p>
              </div>
              <div className="contact-group">
                <p>Last Name :</p>
                <p>{bookinginfo.contactDetails.lastName}</p>
              </div>
              <div className="contact-group">
                <p>Email:</p>
                <p>{bookinginfo.contactDetails.email}</p>
              </div>
              <div className="contact-group">
                <p>Phone :</p>
                <p>{bookinginfo.contactDetails.phone}</p>
              </div>
              <div className="contact-group">
                <p>Country :</p>
                <p>{bookinginfo.contactDetails.country}</p>
              </div>
              <div className="contact-group">
                <p>Adress :</p>
                <p>{bookinginfo.contactDetails.adress}</p>
              </div>
            </div>
            <div className="traveller-details">
              <h4>Traveller Details</h4>
              {bookinginfo.traveller.map((traveller, index) => (
                <div className="traveller-group">
                  <p>
                    Traveller <span>{index + 1}</span>:
                  </p>
                  <p>{`${traveller.firstName} ${traveller.lastName}`}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="notes">
            <div className="title">
              <GrNotes />
              <h4>Notes</h4>
            </div>

            <div className="notes-group">
              <p>Additional Notes :</p>
              <p>{bookinginfo.notes}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentDetails;
