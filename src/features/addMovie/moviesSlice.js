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
  },
});

export const selectAllWatchListMovies = (state) => state.movies.watchListMovies;

export const { addMovieToWatchList } = moviesSlice.actions;

export default moviesSlice.reducer;
