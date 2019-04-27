import React, { Component } from "react";
import API from "../utils/API";
import axios from "axios";
import { Grid, Paper, Typography, TextField, Button } from '@material-ui/core';
import Books from "../components/Books/Books";

import "./Search.css"

class Search extends Component {

  state = {
    books: [],
    title: ""
  };

  handleInputChange = event => {
    console.log("OnChange: ", event.target)
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    console.log("OnClick: ", this.state.title)
    event.preventDefault();
    if (this.state.title) {
    //   API.searchBook(this.state.title)
    //     .then(res => console.log(res))
    //     .catch(err => console.log(err));
      this.searchBook(this.state.title);
     }
  };

  searchBook = title => {
    axios.request({
      method: 'get',
      url: 'https://www.googleapis.com/books/v1/volumes?q=' + title
    }).then((response) => {
      //authors
      console.log(response.data.items[0].volumeInfo.authors);
      //title
      console.log(response.data.items[0].volumeInfo.title);
      //image
      console.log(response.data.items[0].volumeInfo.imageLinks.smallThumbnail);
      //description
      console.log(response.data.items[0].volumeInfo.description);
      //link
      console.log(response.data.items[0].volumeInfo.previewLink);
      
      this.setState({
        books: response.data.items
      });

    }).catch((error) => {
      console.log(error);
    });
  }

 
  render() {
    return (
      <Grid item sm={12}>
        <Paper className="paper">
          <Typography variant="headline" color="inherit" align="center" gutterBottom>
                Enter a book name to start searching ...
          </Typography>

          <Grid container>
            <Grid item sm={10}>
              <form noValidate autoComplete="off">
                <TextField
                  id="filled-search"
                  label="Search field"
                  type="search"
                  margin="normal"
                  variant="filled"
                  fullWidth
                  value={this.state.title}
                  onChange={this.handleInputChange}
                  name="title"
                />
              </form>
            </Grid>
            <Grid item sm={2}>
              <Button 
                variant="contained" 
                fullWidth 
                style={{ margin: 18, marginLeft: 10, padding: 13 }}
                onClick={this.handleFormSubmit}>
                  Search
              </Button>
            </Grid>
            <Grid item sm={12}>
              <Books books={this.state.books} />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    );
  }
}

export default Search;
