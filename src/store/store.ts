import { configureStore } from "@reduxjs/toolkit";
import filmSliceRTK from "./filmSliceRTK";
import filmPageSlice from "./filmPageSlice";
import filmSearchSlice from "./filmSearchSlice";

export default configureStore({
  reducer: {
    filmsStore: filmSliceRTK,
    oneFilm: filmPageSlice,
    searchFilms: filmSearchSlice,
  },
});
