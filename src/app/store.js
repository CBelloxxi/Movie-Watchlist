import { configureStore } from '@reduxjs/toolkit';
import { movieApi } from "../services/movieApi";
import moviesReducer from "../features/addMovie/moviesSlice";

export const store = configureStore({
  reducer: {
    [movieApi.reducerPath]: movieApi.reducer,
    movies: moviesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(movieApi.middleware),
});
