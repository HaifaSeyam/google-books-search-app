import React from "react";
import { TextField } from '@material-ui/core';

function SearchForm() {
  return (
    <form noValidate autoComplete="off">
        <TextField
            id="outlined-search"
            label="Search field"
            type="search"
            margin="normal"
            variant="outlined"
        />
    </form>
  );
}

export default SearchForm;
