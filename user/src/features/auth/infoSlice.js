import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import axios from "axios";

export const infoAdapter = createEntityAdapter();

export const postInfo = createAsyncThunk(
  "info/postInfo",
  async (info, { rejectWithValue }) => {
    const username = info.username;
    const bio = info.bio;
    const birthday = info.birthday;
    const avatar = info.avatar;
    localStorage.removeItem("errorRegister");

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    try {
      await axios.post(
        "/api/info/save",
        { username, bio, birthday, avatar },
        config
      );
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      console.log(error.response.data);
      localStorage.setItem("errorInfo", error.response.data.error);
      return rejectWithValue(error.response.data);
    }
  }
);

const infoSlice = createSlice({
  name: "info",
  initialState: infoAdapter.getInitialState({ error: null }),
  reducers: {},
  extraReducers: {
    [postInfo.fulfilled]: (state, action) => {},

    [postInfo.rejected]: (state, action) => {
      if (action.payload) {
        state.error = action.payload;
      } else {
        state.error = action.error;
      }
    },
  },
});
export const selectInfoError = (state) => state.info.error;

export default infoSlice.reducer;
