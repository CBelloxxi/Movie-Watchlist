import React, {useState} from 'react';
import { Card, CardMedia } from "@mui/material";
import MovieControl from './MovieControl';

const MovieCard = ({movie, type}) => {
  const [display, setDisplay] = useState("notdisplayed");

  const showIcon = (e) => {
    e.preventDefault();
    setDisplay("displayed")
  }

  const hideIcon = (e) => {
    e.preventDefault();
    setDisplay("notdisplayed")
  }

  return (
    <div className="movie-card">
      <Card sx={{displat: "flex", m: 1}}>
        <div
          onMouseEnter={(e) => showIcon(e)}
          onMouseLeave={(e) => hideIcon(e)}
        >
          <CardMedia
            component="img"
            sx={{width: 220}}
            image={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={movie.title}
        />
        <MovieControl type={type} movie={movie} display={display} />
        </div>
      </Card>
    </div>
  )
}

export default MovieCard
