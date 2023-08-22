import { configureStore } from "@reduxjs/toolkit";
import newsDataReducer from "./newsDataSlice"
import feedBackDataReducer from "./feedBackDataSlice"
export const store = configureStore({
  reducer: {
    newsData:newsDataReducer,
    feedBackData:feedBackDataReducer
  },
});
