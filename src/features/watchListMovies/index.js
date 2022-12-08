import React from 'react';
import { Typography, Container } from "@mui/material";
import { useSelector } from "react-redux";
import { selectAllWatchListMovies } from '../addMovie/moviesSlice';
import MovieGrid from "../../components/MovieGrid";
import Message from '../../components/Message';

const WatchListMovies = () => {
  const watchListMovies = useSelector(selectAllWatchListMovies)

  console.log("watchListMovies", watchListMovies);
  return (
    <Container fixed>
      <Typography variant="h4" style={{fontWeight: "600"}} mt={4}>
        My WatchList
      </Typography>
      {watchListMovies.length > 0 ? (
        <>
          <MovieGrid movies={watchListMovies}  type="watchList"/>
        </>
      ) : (
        <>
          <Message title={"Please Add Your Favourite Movies into Watchlist "}/>
        </>
      )}
    </Container>
  );
};

export default WatchListMovies
