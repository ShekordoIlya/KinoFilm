import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const FetchSearchFilm: any = createAsyncThunk(
  "films/fetchSearchFilmSuccess",
  async (objFromSearchQuery, { rejectWithValue }) => {
    const { searchQuery, currPage } = objFromSearchQuery;
    try {
      const response = await fetch(
        `https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${searchQuery}&page=${currPage}`,
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
      const data = response.json();
      console.log(data);
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const filmSearchSlice = createSlice({
  name: "filmsSearch",
  initialState: {
    films: [],
    totalItems: 0,
    totalPages: 0,
    currentPage: 1,
    itemsPerPage: 20,
    searchQuery: "",
    selectedFilm: null,
    error: null as string | null,
    loading: false,
    openClose: false,
  },
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setOpenClose: (state, action) => {
      state.openClose = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(FetchSearchFilm.pending, (state) => {
        state.loading = true;
      })
      .addCase(FetchSearchFilm.fulfilled, (state, action) => {
        state.films = action.payload.films;
        state.error = null;
        state.loading = true;
        state.totalPages = action.payload.pagesCount;
      })
      .addCase(FetchSearchFilm.rejected, (state, action) => {
        state.error = action.payload as string | null;
        state.loading = false;
      });
  },
});

export const { setSearchQuery, setPage, setOpenClose } =
  filmSearchSlice.actions;

export default filmSearchSlice.reducer;
