import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const FetchFilms: any = createAsyncThunk(
  "films/fetchFilmsSuccess",
  async (objFromFetchProps: { currPage: number }, { rejectWithValue }) => {
    const { currPage } = objFromFetchProps;
    try {
      const response = await fetch(
        `https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=TOP_250_MOVIES&page=${currPage}`,
        {
          method: "GET",
          headers: {
            "X-API-KEY": "b63c3f88-bed7-4873-83fa-1fb022955ee4",
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Error");
      }
      const data = response.json();
      console.log(data);
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const filmSliceRTK = createSlice({
  name: "films",
  initialState: {
    films: [],
    totalItems: 0,
    totalPages: 0,
    currentPage: 1,
    itemsPerPage: 20,
    selectedFilm: null,
    error: null as string | null,
    loading: false,
  },
  reducers: {
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(FetchFilms.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(FetchFilms.fulfilled, (state, action) => {
        console.log("action in fulfilled case:", action.payload);
        state.loading = false;
        state.error = null;
        state.films = action.payload.items;
        state.totalItems = action.payload.total;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(FetchFilms.rejected, (state, action) => {
        state.error = action.payload as string;
        state.loading = false;
      });
  },
});

export const { setPage } = filmSliceRTK.actions;

export default filmSliceRTK.reducer;
