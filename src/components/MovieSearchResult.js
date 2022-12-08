import React from 'react';
import { Box, Card, CardContent, CardMedia, Typography, Stack, Button} from "@mui/material";
import Moment from "react-moment";
import { useDispatch, useSelector } from 'react-redux';
import { addMovieToWatched, addMovieToWatchList, selectAllWatchedMovies, selectAllWatchListMovies } from '../features/addMovie/moviesSlice';

export const MovieSearchResult = ({movie}) => {
  const dispatch = useDispatch();
  const watchListMovies = useSelector(selectAllWatchListMovies);
  const watchedMovies = useSelector(selectAllWatchedMovies);

    let storedMovies = watchListMovies.find((item) => item.id === movie.id);
    let storedMoviesWatched = watchedMovies.find((item) => item.id === movie.id);

    const watchListDisabled = storedMovies ? true : storedMoviesWatched ? true : false;

    const watchedDisabled = storedMoviesWatched ? true : false;

  return (
    <Card sx={{display: "flex", height: 170, m:1}}>
      <CardMedia
      component="img"
      sx={{width: 151}}
      image={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
      alt={movie.title}
      />
      <Box sx={{display: "flex", flexDirection: "column"}}>
        <CardContent sx={{flex: "1 0 auto"}}>
          <Typography component="div" variant="h5">
            {movie.title.substring(0,25)}
          </Typography>
          <Typography color="text.secondary" component="div">
            <Moment format="YYYY">{movie.release_date}</Moment>
          </Typography>
          <Stack spacing={2} direction="row" sx={{mt: 6}}>
            <Button
            variant="contained"
            disabled={watchListDisabled}
            onClick={() => dispatch(addMovieToWatchList(movie))}
            >
              Add To WatchList
            </Button><Button
            variant="contained"
            disabled={watchedDisabled}
            onClick={() => dispatch(addMovieToWatched(movie))}
            >
              Add To Watched
            </Button>
          </Stack>
        </CardContent>
      </Box>
    </Card>
  )
}

export default MovieSearchResult
