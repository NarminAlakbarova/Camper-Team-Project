import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  loading: false,
  error: "",
};

export const getNewsData = createAsyncThunk("getNewsData", async () => {
  const resp = await axios("http://localhost:8080/newsCamper");
  return resp.data;
});

export const getNewsDataSlice = createSlice({
  name: "newsData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getNewsData.pending, (state, action) => {
      (state.loading = true), (state.error = "");
    });
    builder.addCase(getNewsData.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(getNewsData.rejected, (state, action) => {
      state.error = "Data not Found";
    });
  },
});

export default getNewsDataSlice.reducer
