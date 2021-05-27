import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import axios from "../../api/api";

export const genresAdapter = createEntityAdapter();

export const fetchGenres = createAsyncThunk(
  "trendingSlice/fetchGenres",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      );
      return response.data.genres;
    } catch (error) {
      if (!error.response) {
        throw error;
      }

      return rejectWithValue(error.response.data);
    }
  }
);

const trendingSlice = createSlice({
  name: "genres",
  initialState: genresAdapter.getInitialState({ error: null }),
  reducers: {},
  extraReducers: {
    [fetchGenres.fulfilled]: (state, action) => {
      genresAdapter.addMany(state, action.payload);
    },

    [fetchGenres.rejected]: (state, action) => {
      if (action.payload) {
        state.error = action.payload.status_message;
      } else {
        state.error = action.error;
      }
    },
  },
});

export const { selectAll: selectAllGenres } = genresAdapter.getSelectors(
  (state) => state.genres
);

export const selectTrendingError = (state) => state.trending.error;

export default trendingSlice.reducer;
