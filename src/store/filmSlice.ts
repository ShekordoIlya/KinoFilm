import { createSlice } from "@reduxjs/toolkit";

const filmSlice = createSlice({
  name: "films",
  initialState: {
    films: [],
    selectedFilm: null,
  },
  reducers: {
    selectFilm(state, action) {
      state.selectedFilm = action.payload;
    },
    getFilm(state, action) {
      state.films = action.payload;
    },
  },
});

export const { selectFilm, getFilm } = filmSlice.actions;
export default filmSlice.reducer;
