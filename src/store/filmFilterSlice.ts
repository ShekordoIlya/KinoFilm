import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const FetchFilmFilter: any = createAsyncThunk(
  "films/fetchFilterFilmSuccess",
  async (objFromFilterPage, { rejectWithValue }) => {
    const { yearFrom, yearTo, minRating, maxRating, currPage } =
      objFromFilterPage;
    try {
      const response = await fetch(
        `https://kinopoiskapiunofficial.tech/api/v2.2/films?order=RATING&type=ALL&ratingFrom=${minRating}&ratingTo=${maxRating}&yearFrom=${yearFrom}&yearTo=${yearTo}&page=${currPage}`,
        {
          method: "GET",
          headers: {
            "X-API-KEY": "b63c3f88-bed7-4873-83fa-1fb022955ee4",
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("error");
      }
      const data = await response.json();
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const filterFilmSlice = createSlice({
  name: "filter",
  initialState: {
    films: [],
    loading: false,
    error: null as string | null,
    minRating: 0,
    maxRating: 0,
    showFilterField: true,
    yearFrom: 1990,
    yearTo: 2024,
    totalItems: 0,
    totalPages: 0,
    currentPage: 1,
    itemsPerPage: 20,
  },
  reducers: {
    setMinRating: (state, action) => {
      state.minRating = action.payload;
    },
    setMaxRating: (state, action) => {
      state.maxRating = action.payload;
    },
    setShowFilterField: (state, action) => {
      state.showFilterField = action.payload;
    },
    setYearFrom: (state, action) => {
      state.yearFrom = action.payload;
    },
    setYearTo: (state, action) => {
      state.yearTo = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(FetchFilmFilter.pending, (state) => {
        state.loading = true;
      })
      .addCase(FetchFilmFilter.fulfilled, (state, action) => {
        state.films = action.payload.items;
        state.loading = false;
        state.error = null;
      })
      .addCase(FetchFilmFilter.rejected, (state) => {
        state.error = "error";
        state.loading = true;
      });
  },
});

export default filterFilmSlice.reducer;

export const {
  setMinRating,
  setMaxRating,
  setShowFilterField,
  setYearFrom,
  setYearTo,
} = filterFilmSlice.actions;
