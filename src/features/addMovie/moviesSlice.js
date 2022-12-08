import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice ({
  name: "movies",
  initialState: {
    watchedMovies: [],
    watchListMovies: [],
  },
  reducers: {
    addMovieToWatchList(state, action){
      state.watchListMovies.push(action.payload);
    },
    addMovieToWatched(state, action) {
      state.watchListMovies = state.watchListMovies.filter(
        (movie) => movie.id !== action.payload.id
      );
      state.watchedMovies.push(action.payload);
    },
    removeMovieFromWatchList(state, action) {
      state.watchListMovies = state.watchListMovies.filter(
        (movie) => movie.id !== action.payload
      );
    },
    moveToWatchList(state, action) {
      state.watchedMovies = state.watchedMovies.filter(
        (movie) => movie.id !== action.payload.id
      );
      state.watchListMovies.push(action.payload);
    },
    removeMovieFromWatched(state, action) {
      state.watchedMovies = state.watchedMovies.filter(
        (movie) => movie.id !== action.payload
      );
    },
  },
});

export const selectAllWatchListMovies = (state) => state.movies.watchListMovies;
export const selectAllWatchedMovies = (state) => state.movies.watchedMovies;

export const {
  addMovieToWatchList,
  addMovieToWatched,
  removeMovieFromWatchList,
  moveToWatchList,
  removeMovieFromWatched,
} = moviesSlice.actions;

export default moviesSlice.reducer;
