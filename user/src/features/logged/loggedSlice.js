import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  islogged: false,
  username: "",
  status: "idle",
};
export const incrementAsync = createAsyncThunk(
  "counter/username",
  async (amount) => {
    const response = await fetch("/login");
    // The value we return becomes the `fulfilled` action payload
    return response.data.usernames.username;
  }
);
const loggedSlice = createSlice({
  name: "logged",
  initialState,
  reducers: {
    isLogged: (state, action) => {
      state.islogged = action.payload;
    },
    username: (state, action) => {
      state.username = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.username += action.payload;
      });
  },
});

export const { isLogged, username } = loggedSlice.actions;
export default loggedSlice.reducer;
