import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "http://localhost:8080";
const initialState = {
  data: [],
  loading: false,
  error: "",
};

export const getUsersData = createAsyncThunk("getUsersData", async () => {
  const res = await axios(`${BASE_URL}/users`);
  return res.data;
});

export const addUser = createAsyncThunk("addUser", async (userInfo) => {
  await axios.post(`${BASE_URL}/users`, userInfo);
});

export const updateUser = createAsyncThunk("updateUser", async (values) => {
  await axios.patch(`${BASE_URL}/users/${values.id}`, values);
});

export const addDeleteWishList = createAsyncThunk(
  "addDeleteWishList",
  async (values) => {
    await axios.patch(`${BASE_URL}/users/${values.id}`, {
      wishList: values.wishList,
    });
    return values;
  }
);

export const usersDataSlice = createSlice({
  name: "usersData",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getUsersData.pending, (state) => {
      (state.loading = true), (state.error = "");
    }),
      builder.addCase(getUsersData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      });
    builder.addCase(getUsersData.rejected, (state) => {
      state.error = "Data not Found";
    });
    builder.addCase(addDeleteWishList.fulfilled, (state, action) => {
      const wishList = action.payload.wishList;
      state.data = state.data.map((item) =>
        item.id == action.payload.id ? { ...item, wishList } : item
      );
    });
  },
});
export const { updateUserComments } = usersDataSlice.actions;
export default usersDataSlice.reducer;
