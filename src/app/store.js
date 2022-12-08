import { configureStore } from '@reduxjs/toolkit';
import { movieApi } from "../services/movieApi";
import moviesReducer from "../features/addMovie/moviesSlice";
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/lib/persistReducer';
import { combineReducers } from '@reduxjs/toolkit';

const persistConfig = {
  key: "root",
  version: 1,
  storage
}

const reducer = combineReducers({
  [movieApi.reducerPath]: movieApi.reducer,
    movies: moviesReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(movieApi.middleware),
});
