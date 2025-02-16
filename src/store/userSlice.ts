import {
  asyncThunkCreator,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";

export const registrationUser = createAsyncThunk(
  "user/registrationUser",
  async (registrationData, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://studapi.teachmeskills.by/auth/users",
        {
          method: "POST",
          body: JSON.stringify(registrationData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("error");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    error: null as any,
    loading: false,
  },
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registrationUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.error = null;
      })
      .addCase(registrationUser.rejected, (state, action) => {
        state.error = action.payload;
        state.user = null;
      })
      .addCase(registrationUser.pending, (state) => {
        state.loading = true;
      });
  },
});

export default userSlice.reducer;
export const { addUser } = userSlice.actions;
