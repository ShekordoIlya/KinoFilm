// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// export const filmSearch: any = createAsyncThunk(
//   "films/fetchFilmsSuccess",
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await fetch(
//         `https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=мстители&page=1`,
//         {
//           method: "GET",
//           headers: {
//             "X-API-KEY": "b63c3f88-bed7-4873-83fa-1fb022955ee4",
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       if (!response.ok) {
//         throw new Error("Error");
//       }
//       const data = response.json();
//       console.log(data, "its from SEARCH");
//       return data;
//     } catch (error: any) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// const filmsSearchSliceRTK = createSlice({
//   name: "filmsSearch",
//   initialState: {
//     seacrhingFilms: {},
//     totalItems: 0,
//     totalPages: 0,
//     currentPage: 1,
//     itemsPerPage: 20,
//     selectedFilm: null,
//     error: null as string | null,
//     loading: false,
//   },
//   reducers: {
//     setPage: (state, action) => {
//       state.currentPage = action.payload;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(filmSearch.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(filmSearch.fulfilled, (state, action) => {
//         console.log("action in fulfilled case from input:", action.payload);
//         state.loading = false;
//         state.error = null;
//         state.seacrhingFilms = action.payload;
//       })
//       .addCase(filmSearch.rejected, (state, action) => {
//         state.error = action.payload as string;
//         state.loading = false;
//       });
//   },
// });

// export const { setPage } = filmsSearchSliceRTK.actions;

// export default filmsSearchSliceRTK.reducer;
