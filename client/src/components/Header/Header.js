import React from "react";
import { Grid, Typography, Paper } from '@material-ui/core';
import "./Header.css"

function Header() {
  return (
      <Grid item sm={12}>
        <Paper className="paper">
            <Typography variant="h3" color="inherit" align="center">
                (React) Google Books Search
            </Typography>
            <Typography variant="h4" color="inherit" align="center">
                Search for and Save Books of Interest
            </Typography>
        </Paper>
      </Grid>    
  );
}

export default Header;
