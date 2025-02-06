import { configureStore } from "@reduxjs/toolkit";
import filmSliceRTK from "./filmSliceRTK";
import filmPageSlice from "./filmPageSlice";

export default configureStore({
  reducer: {
    filmsStore: filmSliceRTK,
    oneFilm: filmPageSlice,
  },
});
