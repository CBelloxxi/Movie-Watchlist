import React from 'react';
import { styled } from "@mui/material/styles";

const Message = ({title}) => {
  const Div = styled("div")(({ theme }) => ({
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
    textAlign: "center",
    color: "#c4c4c4",
    fontSize: "2.2rem",
    marginTop: "200px",
  }));
  return <Div>{title}</Div>;
};

export default Message;
