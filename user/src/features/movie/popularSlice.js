import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import axios from "../../api/api";

export const popularAdapter = createEntityAdapter();

export const fetchPopular = createAsyncThunk(
  "popularSlice/fetchPopular",
  async (type, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${type}/popular?api_key=87871b6d81576f815efd80c7af097c08&language=en-US&page=1`
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

const popularSlice = createSlice({
  name: "popular",
  initialState: popularAdapter.getInitialState({ error: null }),
  reducers: {},
  extraReducers: {
    [fetchPopular.fulfilled]: (state, action) => {
      popularAdapter.setAll(state, action.payload);
    },

    [fetchPopular.rejected]: (state, action) => {
      if (action.payload) {
        state.error = action.payload.status_message;
      } else {
        state.error = action.error;
      }
    },
  },
});

export const { selectAll: selectAllPopular } = popularAdapter.getSelectors(
  (state) => state.popular
);

export const selectTrendingError = (state) => state.popular.error;

export default popularSlice.reducer;
