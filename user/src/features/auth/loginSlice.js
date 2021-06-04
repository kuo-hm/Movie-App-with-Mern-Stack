import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import axios from "axios";

export const loginAdapter = createEntityAdapter();

export const postLogin = createAsyncThunk(
  "login/postLogin",
  async (user, { rejectWithValue }) => {
    const email = user.email;
    const password = user.password;
    localStorage.removeItem("error");

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    try {
      const { data } = await axios.post(
        "/api/auth/login",
        { email, password },
        config
      );
      localStorage.setItem("authToken", data.token);
      localStorage.setItem("username", data.usern);
      localStorage.removeItem("error");
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      localStorage.setItem("error", error.response.data.error);

      return rejectWithValue(error.response.data);
    }
  }
);

const loginSlice = createSlice({
  name: "login",
  initialState: loginAdapter.getInitialState({ error: null, isLogged: false }),
  reducers: {},
  extraReducers: {
    [postLogin.fulfilled]: (state, action) => {
      state.isLogged = true;
    },

    [postLogin.rejected]: (state, action) => {
      if (action.payload) {
        state.error = action.payload;
      } else {
        state.error = action.error;
      }
    },
  },
});

export const selectLoginError = (state) => state.login.error;

export default loginSlice.reducer;
