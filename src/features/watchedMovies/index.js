import React from 'react';
import { Typography, Container } from "@mui/material";
import { useSelector } from "react-redux";
import { selectAllWatchedMovies } from '../addMovie/moviesSlice';
import MovieGrid from "../../components/MovieGrid";
import Message from "../../components/Message";

const WatchedMovies = () => {
  const watchedMovies = useSelector(selectAllWatchedMovies);

  return (
    <Container fixed>
      <Typography variant="h4" style={{fontWeight: "600"}} mt={4}>
        Watched
      </Typography>
      {watchedMovies.length > 0 ? (
        <>
          <MovieGrid movies={watchedMovies}  type="watched"/>
        </>
      ) : (
        <>
          <Message title={"Please Add Your Watched Movie Here"}/>
        </>
      )}
    </Container>
  );
};

export default WatchedMovies;
