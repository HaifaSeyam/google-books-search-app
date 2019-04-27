import React, { Component, Fragment } from "react";
import API from "../utils/API";

class Saved extends Component {

  loadBooks = () => {
    return API.findBook()
  }

  componentDidMount() {
    this.loadBooks().then(response => {
      console.log(response)
    })
  }
 
  render() {
    return (
      <Fragment>
        <h1>Saved Page</h1>
      </Fragment>
    );
  }
}

export default Saved;