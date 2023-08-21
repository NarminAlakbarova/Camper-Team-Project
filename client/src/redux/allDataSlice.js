import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = " http://localhost:8080";

const initialState = {
  data: [],
  loading: false,
  error: "",
};

export const getData = createAsyncThunk("getData", async (param) => {
  console.log(param);
  const resp = await axios(`/${param}`);
  
  return resp.data;
});

export const allDataSlice = createSlice({
  name: "data",
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder.addCase(getData.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(getData.fulfilled, (state, action) => {
      state.data = action.payload;
      console.log(state.data);
      state.loading = false;
    });
    builder.addCase(getData.rejected, (state, action) => {
      state.error = "data not found";
      console.log("3");
    });
  },
  
});

export default allDataSlice.reducer;
