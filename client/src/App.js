import React, {Component, Fragment} from "react";

import Header from "./components/Header/Header"
import Container from "./components/Container/Container"

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Container />
      </Fragment>
    );
  }
}

export default App;
