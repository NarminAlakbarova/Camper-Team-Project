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

export const sortData = createAsyncThunk("sortData", async (sortType) => {
  console.log(sortType);
  return sortType;
});

export const sortDataPrice = createAsyncThunk(
  "sortDataPrice",
  async (sortType) => {
    return sortType;
  }
);

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
    builder.addCase(sortDataPrice.fulfilled, (state, action) => {
      action.payload == "asc"
        ? (state.data = state.data.sort(
            (a, b) => a.tourPriceUSD - b.tourPriceUSD
          ))
        : (state.data = state.data.sort(
            (a, b) => b.tourPriceUSD - a.tourPriceUSD
          ));
    });
    builder.addCase(sortData.fulfilled, (state, action) => {
      if (action.payload == "title") {
        state.date = state.data.sort((a, b) =>
          a.tourTitle.localeCompare(b.tourTitle)
        );
      } else if (action.payload == "rating") {
        state.data = state.data.sort((a, b) => b.tourRating - a.tourRating);
      } else if (action.payload == "duration") {
        state.data = state.data.sort(
          (a, b) => a.tourDuringDay - b.tourDuringDay
        );
      }
    });
  },
});
export default toursDataSlice.reducer;
