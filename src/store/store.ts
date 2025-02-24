import { configureStore } from "@reduxjs/toolkit";
import filmSliceRTK from "./filmSliceRTK";
import filmPageSlice from "./filmPageSlice";
import filmSearchSlice from "./filmSearchSlice";
import filterFilmSlice from "./filmFilterSlice";
import userSlice from "./userSlice";

export default configureStore({
  reducer: {
    filmsStore: filmSliceRTK,
    oneFilm: filmPageSlice,
    searchFilms: filmSearchSlice,
    filterFilms: filterFilmSlice,
    users: userSlice,
  },
});
