import React from "react";

const HeaderBooking = ({pageChanges,setPageChanges}) => {
  return (
    <div id="booking-header">
      <div className="container">
        <div className="booking-header">
          <ul>
            <div className="line"></div>
            <li>
              <p>Select Tour</p>
              <button></button>
            </li>
            <li>
              <p>Contact Details</p>
              <button onClick={()=>setPageChanges(false)}></button>
            </li>
            <li>
              <p>Payment</p>
              <button></button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeaderBooking;
