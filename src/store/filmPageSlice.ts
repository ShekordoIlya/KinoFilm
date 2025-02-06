import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchFilm: any = createAsyncThunk(
  "film/fetchFilmSuccess",
  async ({ objFromFilm }, { rejectWithValue }) => {
    const { kinopoiskId } = objFromFilm;
    try {
      const response = await fetch(
        `https://kinopoiskapiunofficial.tech/api/v2.2/films/${kinopoiskId}`,
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
      console.log(data, "ITS Film");
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const filmPageSlice = createSlice({
  name: "filmPage",
  initialState: {
    kinopoiskId: 0,
    filmName: null as string | null,
    poster: null as string | null,
    load: false,
    error: null as string | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilm.pending, (state) => {
        state.load = true;
      })
      .addCase(fetchFilm.fulfilled, (state, action) => {
        state.kinopoiskId = action.payload;
        state.filmName = action.payload.nameRu;
        state.poster = action.payload.posterUrl;
      })
      .addCase(fetchFilm.rejected, (state, action) => {
        state.error = action.payload;
        state.load = false;
      });
  },
});

export default filmPageSlice.reducer;
export const {} = filmPageSlice.actions;
