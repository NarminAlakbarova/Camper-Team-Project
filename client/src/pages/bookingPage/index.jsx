import React, { useState } from "react";
import HeaderBooking from "../../sections/bookingPage/HeaderBooking";
import "./index.scss";
import UserDetails from "../../sections/bookingPage/UserDetails";
import TourDetails from "../../sections/bookingPage/TourDetails";
import PaymentDetails from "../../sections/bookingPage/PaymentDetails";
const BookingPage = () => {
  const [pageChanges, setPageChanges] = useState(false);

  return (
    <div>
      <HeaderBooking
        pageChanges={pageChanges}
        setPageChanges={setPageChanges}
      />
      <div id="booking-content">
        <div className="container">
          <div className="booking-content">
            <div className="row">
              <div className="col-lg-8 col-md-12">
                {pageChanges ? (
                  <PaymentDetails />
                ) : (
                  <UserDetails
                    pageChanges={pageChanges}
                    setPageChanges={setPageChanges}
              
                  />
                )}
              </div>
              <div className="col-lg-4 col-md-12">
                <TourDetails
                  pageChanges={pageChanges}
                  setPageChanges={setPageChanges}
           
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
