import React from "react";

const BookingInfo = () => {
  return (
    <div id="booking-info">
      <div className="booking-info">
        <div className="row">
          <div className="col-6">
            <div className="card today-booking-card">
              <p className="title">Today’s Bookings</p>
              <p className="number">4006</p>
              <p>10.00% (30 days)</p>
            </div>
          </div>
          <div className="col-6">
            <div className="card total-card">
              <p className="title">Total Bookings</p>
              <p className="number">61344</p>
              <p>22.00% (30 days)</p>
            </div>
          </div>
        </div>
        <div className="row my-4">
          <div className="col-6">
            <div className="card meeting-card">
              <p className="title">Number of Meetings</p>
              <p className="number">34040</p>
              <p>2.00% (30 days)</p>
            </div>
          </div>
          <div className="col-6">
            <div className="card client-card">
              <p className="title">Number of Clients</p>
              <p className="number">47033</p>
              <p>0.22% (30 days)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingInfo;
