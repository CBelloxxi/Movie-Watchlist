import React from "react";
import { useDispatch } from "react-redux";
import { Button, Stack, styled } from "@mui/material";
import { addMovieToWatched, removeMovieFromWatchList, moveToWatchList, removeMovieFromWatched } from "../features/addMovie/moviesSlice";


const MovieControl = ({type, movie, display}) => {
  const dispatch = useDispatch();

  const ControlButton = styled(Button)(({ _ }) => ({
    color: "#fefefe",
    backgroundColor: "transparent",
    border: "none",
    transition: "all 0.3s ease",
    fontSize: "1.25rem",
    padding: "5px",
    margin: "0",
    minWidth: "0 !important",
  }));
  return (
    <div className={`notdisplayed ${display}`}>
      {type === "watchList" && (
        <Stack direction="row">
          <ControlButton onClick={() => dispatch(addMovieToWatched(movie))}>
            <i className="fa-fw far fa-eye"></i>
          </ControlButton>
          <ControlButton onClick={() => dispatch(removeMovieFromWatchList(movie.id))}>
            <i className="fa-fw fa fa-times"></i>
          </ControlButton>
        </Stack>
      )}

      {type === "watched" && (
        <Stack direction="row">
          <ControlButton onClick={() => dispatch(moveToWatchList(movie))}>
            <i className="fa-fw far fa-eye-slash"></i>
          </ControlButton>
          <ControlButton onClick={() => dispatch(removeMovieFromWatched(movie.id))}>
            <i className="fa-fw fa fa-times"></i>
          </ControlButton>
        </Stack>
      )}
    </div>
  )
}

export default MovieControl
