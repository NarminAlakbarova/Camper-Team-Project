import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./allDataSlice";

export const store = configureStore({
  reducer: {
    data: dataReducer,
  },
});
