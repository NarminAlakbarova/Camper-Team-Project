import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "http://localhost:8080";
const initialState = {
  data: [],
  loading: false,
  error: "",
};

export const getBookingData = createAsyncThunk("getBookingData", async () => {
  const res = await axios(`${BASE_URL}/bookedTours`);
  return res.data;
});

export const addBookingValue = createAsyncThunk(
  "addBookingValue",
  async (obj) => {
    const res = await axios(`${BASE_URL}/bookedTours`);
    let check = res.data.find((tour) => tour.tourTitle == obj.tourTitle);
    check
      ? await axios.patch(`${BASE_URL}/bookedTours/${obj.id}`, obj)
      : await axios.post(`${BASE_URL}/bookedTours`, obj);
    return [obj, check];
  }
);

export const bookingDataSlice = createSlice({
  name: "bookingData",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getBookingData.pending, (state, action) => {
      (state.loading = true), (state.error = "");
    }),
      builder.addCase(getBookingData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      });
    builder.addCase(getBookingData.rejected, (state, action) => {
      state.error = "Data not Found";
    });
    builder.addCase(addBookingValue.fulfilled, (state, action) => {
      const value = action.payload[0];
      const check = action.payload[1];
      if (check) {
        return (state.data = state.data.map((item) =>
          item.id == value.id ? value : item
        ));
      } else {
        console.log(value);
        // state.data=[...state.data,value]
      }
    });
  },
});

export default bookingDataSlice.reducer;
