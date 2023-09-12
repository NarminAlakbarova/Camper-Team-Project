import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  filteredData: [],
  loading: false,
  error: "",
};

export const feedBackData = createAsyncThunk("feedBackData", async () => {
  const resp = await axios("http://localhost:8080/feedBackCamper");
  return resp.data;
});

export const searchFeedBack = createAsyncThunk(
  "searchFeedBack",
  async (value) => {
    return value.toLocaleLowerCase();
  }
);

export const addFeedback = createAsyncThunk("addFeedback", async (values) => {
  // console.log(values);
  await axios.post("http://localhost:8080/feedBackCamper", values);
  return values;
});

export const updateFeedback = createAsyncThunk(
  "updateFeedback",
  async (values) => {
    await axios.patch(`http://localhost:8080/feedBackCamper/${values.id}`,values)
    return values;
  }
);

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
      state.filteredData = action.payload;
    });
    builder.addCase(feedBackData.rejected, (state, action) => {
      state.error = "Data not Found";
    });
    builder.addCase(searchFeedBack.fulfilled, (state, action) => {
      const keys = ["userName", "raiting", "userStatus", "feedBack"];
      state.data = state.filteredData.filter((item) =>
        keys.some((key) =>
          item[key].toString().toLocaleLowerCase().includes(action.payload)
        )
      );
    });
    // builder.addCase(addFeedback.fulfilled,(state,action)=>{
    //   console.log(action.payload);
    // });
    // builder.addCase(updateFeedback.fulfilled,(state,action)=>{
    //   console.log(action.payload);
    // })
  },
});

export default feedBackDataSlice.reducer;
