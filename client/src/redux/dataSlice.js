import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  loading: false,
  error: "",
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducer: {},
  extraReducer: (builder) => {},
});

export default dataSlice.reducer;
