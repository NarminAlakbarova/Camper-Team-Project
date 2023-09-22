import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "http://localhost:8080";
const initialState = {
  data: [],
  loading: false,
  error: "",
};

export const getUserBookingData = createAsyncThunk(
  "getUserBookingData",
  async () => {
    const resp = await axios(`${BASE_URL}/usersBooking`);
    return resp.data;
  }
);

export const addUserBookingData = createAsyncThunk(
  "addUserBookingData",
  async (obj) => {
    await axios.post(`${BASE_URL}/usersBooking`, obj);
  }
);

export const userBookingDataSlice = createSlice({
  name: "usersBooking",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getUserBookingData.pending, (state, action) => {
      (state.loading = true), (state.error = "");
    }),
      builder.addCase(getUserBookingData.fulfilled, (state, action) => {
        (state.loading = false), (state.data = action.payload);
      }),
      builder.addCase(getUserBookingData.rejected, (state, action) => {
        state.data = "data not found";
      });
  },
});

export default userBookingDataSlice.reducer;
