import React from "react";
import { Grid, Paper } from '@material-ui/core';
import Search from "../../pages/Search";
import SearchForm from "../../components/SearchForm/SearchForm"
import "./Container.css";

function Container() {
  return (
    <Grid sm={12}>
        <Paper className="paper">
            <Search />
        </Paper>
        <Paper className="paper">
            <SearchForm />
        </Paper>
    </Grid>
  );
}

export default Container;
