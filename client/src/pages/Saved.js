import React, { Component } from "react";
import API from "../utils/API";
import { Grid, Paper, Typography} from '@material-ui/core';
import SavedBooks from "../components/Books/SavedBooks";


class Saved extends Component {

  state= {
    books: []
  }

  loadBooks = () => {
    return API.findBook()
  }

  componentDidMount() {
    this.loadBooks().then(response => {
      this.setState({
        books: response.data
      });
    })
  }

  deleteBook = (id) => {
    API.deleteBook(id).then(res => {
      this.componentDidMount();
    });
  }

  render() {
    return (
      <Grid item sm={12}>
        <Paper className="paper">
          
          {(this.state.books.length > 0) ? (
            <Grid container>
            <Grid item sm={12}>
              <SavedBooks deleteBook={this.deleteBook} books={this.state.books} />
            </Grid>
          </Grid>
          ) : (
            <Typography variant="headline" color="inherit" align="center" gutterBottom>
                You do not have any saved books ... 
            </Typography>
          )}
          
        </Paper>
      </Grid>
    );
  }
}

export default Saved;