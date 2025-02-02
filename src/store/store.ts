import { configureStore } from "@reduxjs/toolkit";
import filmSliceRTK from "./filmSliceRTK";

export default configureStore({
  reducer: {
    filmsStore: filmSliceRTK,
    // filmsSearch: filmsSearchSliceRTK,
  },
});
