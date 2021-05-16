import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import axios from "axios";

export const passwordResetAdapter = createEntityAdapter();

export const postPasswordReset = createAsyncThunk(
  "passwordReset/postFgPassword",
  async (user, { rejectWithValue }) => {
    localStorage.removeItem("errorFgp");
    const password = user.password;
    const parms = user.parms;
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    try {
      const { data } = await axios.put(
        `/api/auth/passwordreset/${parms}`,
        { password },
        config
      );
      localStorage.setItem("errorResP", data.data);

      localStorage.removeItem("errorResP");
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      localStorage.setItem("errorResP", error.response.data.error);

      return rejectWithValue(error.response.data);
    }
  }
);

const loginSlice = createSlice({
  name: "passwordReset",
  initialState: passwordResetAdapter.getInitialState({ error: null }),
  reducers: {},
  extraReducers: {
    [postPasswordReset.fulfilled]: (state, action) => {
      state.isLogged = true;
    },

    [postPasswordReset.rejected]: (state, action) => {
      if (action.payload) {
        state.error = action.payload;
      } else {
        state.error = action.error;
      }
    },
  },
});

export default loginSlice.reducer;
