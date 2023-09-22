import { configureStore } from "@reduxjs/toolkit";
import newsDataReducer from "./newsDataSlice";
import feedBackDataReducer from "./feedBackDataSlice";
import toursDataReducer from "./toursDataSlice";
import usersDataReducer from "./usersDataSlice";
import bookingDataReducer from "./bookingDataSlice";
import userBookingDataReducer from "./userBookingSlice";

export const store = configureStore({
  reducer: {
    newsData: newsDataReducer,
    feedBackData: feedBackDataReducer,
    toursData: toursDataReducer,
    usersData: usersDataReducer,
    bookingData: bookingDataReducer,
    userBooking:userBookingDataReducer,
  },
});
