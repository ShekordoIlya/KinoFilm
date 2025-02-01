import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const FetchFilms: any = createAsyncThunk(
  "films/fetchFilmsSuccess",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=TOP_250_MOVIES&page=1",
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
    selectedFilm: null,
    error: null as string | null,
    loading: false,
  },
  reducers: {},
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
      })
      .addCase(FetchFilms.rejected, (state, action) => {
        state.error = action.payload as string;
        state.loading = false;
      });
  },
});

export default filmSliceRTK.reducer;
