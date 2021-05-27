import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import axios from "../../api/api";

export const ratedAdapter = createEntityAdapter();

export const fetchRated = createAsyncThunk(
  "ratedSlice/fetchRated",
  async (type, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${type}/top_rated?api_key=${process.env.REACT_APP_API_KEY}`
      );
      localStorage.setItem("rated", type);

      return response.data.results;
    } catch (error) {
      if (!error.response) {
        throw error;
      }

      return rejectWithValue(error.response.data);
    }
  }
);

const ratedSlice = createSlice({
  name: "rated",
  initialState: ratedAdapter.getInitialState({ error: null }),
  reducers: {},
  extraReducers: {
    [fetchRated.fulfilled]: (state, action) => {
      ratedAdapter.setAll(state, action.payload);
    },

    [fetchRated.rejected]: (state, action) => {
      if (action.payload) {
        state.error = action.payload.status_message;
      } else {
        state.error = action.error;
      }
    },
  },
});

export const { selectAll: selectAllRated } = ratedAdapter.getSelectors(
  (state) => state.rated
);

export const selectTrendingError = (state) => state.rated.error;

export default ratedSlice.reducer;
