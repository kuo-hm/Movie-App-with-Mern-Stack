import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import axios from "axios";

export const registerAdapter = createEntityAdapter();

export const postRegister = createAsyncThunk(
  "register/postRegister",
  async (user, { rejectWithValue }) => {
    const email = user.email;
    const password = user.password;
    const username = user.username;
    localStorage.removeItem("errorRegister");

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    try {
      await axios.post(
        "/api/auth/register",
        { username, email, password },
        config
      );
      localStorage.removeItem("errorRegister");
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      console.log(error.response.data);
      localStorage.setItem("errorRegister", error.response.data.error);
      return rejectWithValue(error.response.data);
    }
  }
);

const loginSlice = createSlice({
  name: "register",
  initialState: registerAdapter.getInitialState({ error: null }),
  reducers: {},
  extraReducers: {
    [postRegister.fulfilled]: (state, action) => {},

    [postRegister.rejected]: (state, action) => {
      if (action.payload) {
        state.error = action.payload;
      } else {
        state.error = action.error;
      }
    },
  },
});

export const selectRegisterError = (state) => state.register.error;

export default loginSlice.reducer;
