import React, { Component, Fragment } from "react";
import { Grid, Paper, Typography } from '@material-ui/core';
import SearchForm from "../components/SearchForm/SearchForm";
import "./Search.css"

class Search extends Component {
 
  render() {
    return (
      <Grid item sm={12}>
        <Paper className="paper">
          <Typography variant="headline" color="inherit" align="center">
                Enter the book name ...
          </Typography>
          <SearchForm />
        </Paper>
      </Grid>
    );
  }
}

export default Search;
