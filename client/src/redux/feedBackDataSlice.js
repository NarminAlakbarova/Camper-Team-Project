import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  loading: false,
  error: "",
};

export const feedBackData = createAsyncThunk("feedBackData", async () => {
  const resp = await axios("http://localhost:8080/feedBackCamper");
  return resp.data;
});

export const feedBackDataSlice = createSlice({
  name: "feedBackData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(feedBackData.pending, (state, action) => {
      (state.loading = true), (state.error = "");
    });
    builder.addCase(feedBackData.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(feedBackData.rejected, (state, action) => {
      state.error = "Data not Found";
    });
  },
});

export default feedBackDataSlice.reducer
