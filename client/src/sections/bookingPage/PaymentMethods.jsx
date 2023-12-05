import React, { useContext } from "react";
import visaImg from "../../assets/img/booking/visa.png";
import masterCardImg from "../../assets/img/booking/masterCard.png";
import americanExpressImg from "../../assets/img/booking/americanExpress.png";
import jcbImg from "../../assets/img/booking/jcb.png";
import { useDispatch } from "react-redux";
import { addUserBookingData } from "../../redux/userBookingSlice";
import { useNavigate } from "react-router-dom";
import { BookingContext } from "../../context/BookingPRovider";
const PaymentMethods = () => {
  const { bookinginfo, setBookingInfo } = useContext(BookingContext);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleBook = () => {
    dispatch(addUserBookingData(bookinginfo));
    setBookingInfo({
      traveller: [{}],
      contactDetails: {
        userName: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        country: "",
        adress: "",
      },
      tourPrice:"",
      tourTitle:"",
      notes: "",
    });
    navigate("/userProfile/myBookings");
  };
  return (
    <div id="payment-methods">
      <div className="payment-methods-card">
        <h4>Payment Method</h4>
        <div className="card-logo">
          <img src={visaImg} alt="" />
          <img src={masterCardImg} alt="" />
          <img src={americanExpressImg} alt="" />
          <img src={jcbImg} alt="" />
        </div>
        <div className="check-agree">
          <input type="checkbox" />
          <label htmlFor="">
            * I agree with Terms of Service and Privacy Statement.
          </label>
        </div>
        <select name="" id="">
          <option value="">PayPal</option>
          <option value="">Credit Card</option>
        </select>
        <div className="btns">
          <button>Pay Now</button>
          <p>OR</p>
          <button onClick={handleBook}>Book and pay later</button>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethods;
