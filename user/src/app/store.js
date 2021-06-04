import { configureStore } from "@reduxjs/toolkit";
import loggedReducer from "../features/logged/loggedSlice";
import trendingReducer from "../features/movie/trendingSlice";
import genresReducer from "../features/movie/genreSlice";
import popularReducer from "../features/movie/popularSlice";
import ratedReducer from "../features/movie/ratedSlice";
import getUserReducer from "../features/logged/getUserSlice";

export const store = configureStore({
  reducer: {
    logged: loggedReducer,
    trending: trendingReducer,
    genres: genresReducer,
    rated: ratedReducer,
    popular: popularReducer,
    user: getUserReducer,
  },
});
