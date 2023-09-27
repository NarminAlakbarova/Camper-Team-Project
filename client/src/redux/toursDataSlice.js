import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "http://localhost:8080";
const initialState = {
  data: [],
  filteredData: [],
  currencyData: [],
  loading: false,
  error: "",
  searchData: false,
};

export const getToursData = createAsyncThunk("getToursData", async () => {
  const res = await axios(`${BASE_URL}/toursCamper`);
  return res.data;
});

export const sortData = createAsyncThunk("sortData", async (sortType) => {
  console.log(sortType);
  return sortType;
});

export const addTours = createAsyncThunk("addUser", async (toursInfo) => {
  await axios.post(`${BASE_URL}/toursCamper`, toursInfo);
});
export const editTours = createAsyncThunk(
  "editTours",
  async ({ id, toursInfo }) => {
    await axios.patch(`${BASE_URL}/toursCamper/${id}`, toursInfo);
  }
);
export const sortDataPrice = createAsyncThunk(
  "sortDataPrice",
  async (sortType) => {
    return sortType;
  }
);

export const searchTours = createAsyncThunk("searchTours", async (value) => {
  return value.toLocaleLowerCase();
});

export const searchAllTours = createAsyncThunk(
  "searchAllTours",
  async (values) => {
    return values;
  }
);

export const changeCurrency = createAsyncThunk(
  "changeCurrency",
  async (value) => {
    return value;
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
        state.filteredData = action.payload;
        state.currencyData = action.payload;
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
    builder.addCase(searchTours.fulfilled, (state, action) => {
      const keys = ["tourTitle", "tourLocation", "details.distance"];
      state.data = state.filteredData.filter((item) =>
        keys.some((key) =>
          (key === "details.distance" ? item.details.distance : item[key])
            .toLocaleLowerCase()
            .includes(action.payload)
        )
      );
    });
    builder.addCase(searchAllTours.fulfilled, (state, action) => {
      let values = action.payload;
      let durationDay = action.payload.duration.split(",");
      const activities =
        action.payload.activity.length != 0 ? action.payload.activity : [""];

      state.data = state.filteredData.filter(
        (tour) =>
          tour.tourTitle.toLocaleLowerCase().includes(values?.keyword) &&
          (values?.popularTour ? tour.tourRating >= 8 : tour.tourRating < 8) &&
          (durationDay?.length == 1
            ? tour?.tourDuringDay == durationDay[0] ||
              tour?.tourDuringDay >= durationDay[0]
            : +durationDay[0] <= +tour?.tourDuringDay &&
              +durationDay[1] >= +tour?.tourDuringDay) &&
          values?.minPrice <= tour.tourPriceUSD <= values?.maxPrice &&
          activities?.some((activity) =>
            tour.tourActivities.map((item) =>
              item.toLocaleLowerCase().includes(activity)
            )
          )
      );
    });
    builder.addCase(changeCurrency.fulfilled, (state, action) => {
      if (action.payload == "EUR") {
        state.data = state.currencyData.map((item) => {
          item.tourPriceUSD = +item.tourPriceUSD * 0.95;
          item.tourPrevPrice = +item.tourPrevPrice * 0.95;
          return item;
        });
        state.currencyData = state.filteredData;
      } else if (action.payload == "CHF") {
        state.data = state.currencyData.map((item) => {
          item.tourPriceUSD = +item.tourPriceUSD * 0.92;
          item.tourPrevPrice = +item.tourPrevPrice * 0.92;
          return item;
        });
        state.currencyData = state.filteredData;
      } else {
        state.data = state.filteredData;
      }
    });
  },
});
export default toursDataSlice.reducer;
