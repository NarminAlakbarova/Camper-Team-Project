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

export const addNews = createAsyncThunk("addNews", async (values) => {
  await axios.post("http://localhost:8080/newsCamper", values);
  return values;
});

export const updateNews = createAsyncThunk("updateNews", async (values) => {
  await axios.patch(`http://localhost:8080/newsCamper/${values.id}`, values);
  return values;
});

export const deleteNews = createAsyncThunk("deleteNews", async (ids) => {
  // const resp = await axios("http://localhost:8080/newsCamper");
  // const test2 = resp.data.filter((item) => !ids.includes(item.id));
  // resp.data.map((item) =>
  //   setTimeout(async()=>{
  //     ids.includes(item.id) && await axios.delete(`http://localhost:8080/newsCamper/${item.id}`)
  //   },5000)
  // );
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
      const keys = ["newsTitle", "releaseDay", "author"];
      state.data = state.filteredData.filter((item) =>
        keys.some((key) =>
          (key == "author" ? item.author.authorName : item[key])
            .toLocaleLowerCase()
            .includes(action.payload)
        )
      );
    });
    builder.addCase(addNews.fulfilled, (state, action) => {
      state.data.push(action.payload);
    });
    builder.addCase(updateNews.fulfilled, (state, action) => {
      state.data = state.data.map((item) =>
        item.id == action.payload.id ? action.payload : item
      );
    });
    builder.addCase(deleteNews.fulfilled, (state, action) => {
      // console.log(action.payload);
      // state.data = state.data.map(
      //   (item) => action.payload.includes(item.id) || item
      // );
      // state.data=action.payload
    });
  },
});

export default getNewsDataSlice.reducer;
