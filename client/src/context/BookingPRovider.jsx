import React, { createContext, useContext, useState } from "react";
import { UserContext } from "./UserProvider";
export const BookingContext = createContext();
const BookingPRovider = ({ children }) => {
  const { checkUser } = useContext(UserContext);
  let bookingData = JSON.parse(localStorage.getItem("bookingData"));

  const [bookinginfo, setBookingInfo] = useState({
    traveller: [{}],
    contactDetails: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      country: "",
      adress: "",
    },
    tourTitle:"",
    tourPrice: bookingData?.tourPrice,
    notes: "",
    userName: checkUser?.userName,
  });
  const providerValue = {
    bookinginfo,
    setBookingInfo,
  };
  return (
    <BookingContext.Provider value={providerValue}>
      {children}
    </BookingContext.Provider>
  );
};

export default BookingPRovider;
