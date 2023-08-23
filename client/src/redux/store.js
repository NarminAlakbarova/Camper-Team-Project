import { configureStore } from "@reduxjs/toolkit";
import newsDataReducer from "./newsDataSlice";
import feedBackDataReducer from "./feedBackDataSlice";
import toursDataReducer from "./toursDataSlice";

export const store = configureStore({
  reducer: {
    newsData: newsDataReducer,
    feedBackData: feedBackDataReducer,
    toursData: toursDataReducer,
  },
});
