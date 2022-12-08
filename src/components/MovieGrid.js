import React from 'react';
import Grid from '@mui/material/Grid';
import MovieCard from './MovieCard';

const MovieGrid = ({movies, type}) => {
  return (
    <Grid sx={{flexGrow: 1}} container spacing={2} mt={3}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={2}>
          {movies.map((movie) => (
            <div key={movie.id}>
              <Grid item>
                <MovieCard movie={movie} type={type} />
              </Grid>
            </div>
          ))}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default MovieGrid
