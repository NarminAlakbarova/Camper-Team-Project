import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "http://localhost:8080";
const initialState = {
  data: [],
  loading: false,
  error: "",
};

export const getToursData = createAsyncThunk("getToursData", async () => {
  const res = await axios(`${BASE_URL}/toursCamper`);
  return res.data;
});

export const toursDataSlice = createSlice({
  name: "toursData",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getToursData.pending, (state, action) => {
      (state.loading = true), (state.error = "");
    }),
      builder.addCase(getToursData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      });
    builder.addCase(getToursData.rejected, (state, action) => {
      state.error = "Data not Found";
    });
  },
});

export default toursDataSlice.reducer;
