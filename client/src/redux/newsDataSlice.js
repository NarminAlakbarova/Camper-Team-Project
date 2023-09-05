import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  filteredData: [],
  loading: false,
  error: "",
};

export const getNewsData = createAsyncThunk("getNewsData", async () => {
  const resp = await axios("http://localhost:8080/newsCamper");
  return resp.data;
});

export const searchNews = createAsyncThunk("searchNews", async (value) => {
  return value.toLocaleLowerCase();
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
      state.filteredData = action.payload;
    });
    builder.addCase(getNewsData.rejected, (state, action) => {
      state.error = "Data not Found";
    });
    builder.addCase(searchNews.fulfilled, (state, action) => {
      const keys = ["newsTitle", "releaseDay"];
      state.data = state.filteredData.filter(
        (item) =>
          keys.some((key) =>
            item[key].toLocaleLowerCase().includes(action.payload)
          ) ||
          item.author.authorName.toLocaleLowerCase().includes(action.payload)
      );
    });
  },
});

export default getNewsDataSlice.reducer
