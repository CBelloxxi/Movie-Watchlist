import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';

const Header = () => {
  return (
    <>
      <Box sx={{flexGrow:1}}>
        <AppBar position='static'>
          <Toolbar>
            <Typography style={{fontWeight: "700", marginLeft: "40px"}} sx={{flexGrow: 1}}>
                <Link to='/' style={{fontSize: "32px"}}>
                Movie Watchlist
                </Link>
            </Typography>
            <Link to="/">
                <Button color="inherit" style={{fontWeight: "600", fontsize: "20px"}}>
                  WatchList
                </Button>
            </Link>
            <Link to="/watched">
                <Button color="inherit" style={{fontWeight: "600", fontsize: "20px"}}>
                  Watched
                </Button>
            </Link>
            <Link to="/add">
                <Button color="inherit" style={{fontWeight: "600", fontsize: "20px"}}>
                  Add
                </Button>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  )
}

export default Header
