import { configureStore } from "@reduxjs/toolkit";
import filmSlice from "./FilmSlice";

export default configureStore({
  reducer: {
    films: filmSlice,
  },
});
