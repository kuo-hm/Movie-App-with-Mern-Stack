import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import axios from "axios";

export const fgPasswordAdapter = createEntityAdapter();

export const postFgPassword = createAsyncThunk(
  "fgPassword/postFgPassword",
  async (email, { rejectWithValue }) => {
    localStorage.removeItem("errorFgp");

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    try {
      const { data } = await axios.post(
        "/api/auth/forgotpwd",
        { email },
        config
      );
      localStorage.setItem("fgpSucc", data.data);

      localStorage.removeItem("errorFgp");
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      localStorage.setItem("errorFgp", error.response.data.error);

      return rejectWithValue(error.response.data);
    }
  }
);

const loginSlice = createSlice({
  name: "fgPassword",
  initialState: fgPasswordAdapter.getInitialState({ error: null }),
  reducers: {},
  extraReducers: {
    [postFgPassword.fulfilled]: (state, action) => {
      state.isLogged = true;
    },

    [postFgPassword.rejected]: (state, action) => {
      if (action.payload) {
        state.error = action.payload;
      } else {
        state.error = action.error;
      }
    },
  },
});

export default loginSlice.reducer;
