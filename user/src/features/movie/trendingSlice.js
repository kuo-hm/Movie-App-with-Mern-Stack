import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import axios from "../../api/api";

export const trendingAdapter = createEntityAdapter();

export const fetchTrending = createAsyncThunk(
  "trendingSlice/fetchTrending",
  async (type, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `trending/${type}/day?api_key=87871b6d81576f815efd80c7af097c08`
      );
      return response.data.results;
    } catch (error) {
      if (!error.response) {
        throw error;
      }

      return rejectWithValue(error.response.data);
    }
  }
);

const trendingSlice = createSlice({
  name: "trending",
  initialState: trendingAdapter.getInitialState({ error: null }),
  reducers: {},
  extraReducers: {
    [fetchTrending.fulfilled]: (state, action) => {
      trendingAdapter.setAll(state, action.payload);
    },

    [fetchTrending.rejected]: (state, action) => {
      if (action.payload) {
        state.error = action.payload.status_message;
      } else {
        state.error = action.error;
      }
    },
  },
});

export const { selectAll: selectAllTrendingVideos } =
  trendingAdapter.getSelectors((state) => state.trending);

export const selectTrendingError = (state) => state.trending.error;

export default trendingSlice.reducer;
