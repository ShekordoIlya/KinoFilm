import { createSlice } from "@reduxjs/toolkit";

const filmSlice = createSlice({
  name: "films",
  initialState: {
    films: {},
    selectedFilm: null,
    error: null,
    loading: false,
  },
  reducers: {
    selectFilm(state, action) {
      state.selectedFilm = action.payload;
    },
    fetchFilmStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchFilmFail(state, action) {
      state.error = action.payload;
      state.loading = true;
    },
    fetchFilmsSuccess(state, action) {
      state.films = action.payload;
      state.loading = false;
    },
  },
});

export const { selectFilm, fetchFilmStart, fetchFilmFail, fetchFilmsSuccess } =
  filmSlice.actions;
export default filmSlice.reducer;
