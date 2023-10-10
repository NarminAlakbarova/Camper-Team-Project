import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "http://localhost:8080";
const initialState = {
  data: [],
  filteredData: [],
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
export const deleteOrders = createAsyncThunk("deleteOrders", async (id) => {
  await axios.delete(`${BASE_URL}/usersBooking/${id}`);
  return id;
});
export const addUserBookingData = createAsyncThunk(
  "addUserBookingData",
  async (obj) => {
    await axios.post(`${BASE_URL}/usersBooking`, obj);
  }
);

export const searchUserBooking = createAsyncThunk(
  "searchUserBooking",
  async (value) => {
    return value.toLocaleLowerCase();
  }
);

export const userBookingDataSlice = createSlice({
  name: "userBooking",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getUserBookingData.pending, (state, action) => {
      (state.loading = true), (state.error = "");
    }),
      builder.addCase(getUserBookingData.fulfilled, (state, action) => {
        (state.loading = false),
          (state.data = action.payload),
          (state.filteredData = action.payload);
      }),
      builder.addCase(getUserBookingData.rejected, (state, action) => {
        state.data = "data not found";
      });
    builder.addCase(searchUserBooking.fulfilled, (state, action) => {
      const keys = ["tourTitle", "userName", "email"];
      state.data = state.filteredData.filter((item) =>
        keys.some((key) =>
          (key == "email" ? item.contactDetails.email : item[key])
            .toLocaleLowerCase()
            .includes(action.payload)
        )
      );
    });
    builder.addCase(deleteOrders.fulfilled, (state, action) => {
      state.data = state.data.filter((item) => item.id !== action.payload);
    });
  },
});

export default userBookingDataSlice.reducer;
