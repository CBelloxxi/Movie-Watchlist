import React from 'react';
import { Card, CardMedia } from "@mui/material";

const MovieCard = (movie) => {
  return (
    <div className="movie-card">
      <Card sx={{display: "flex", m: 1}}>
        <CardMedia
          component="img"
          sx={{width: 151}}
          image={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
          alt={movie.title}
        />
        {/* {Movie} */}
      </Card>
    </div>
  )
}

export default MovieCard
