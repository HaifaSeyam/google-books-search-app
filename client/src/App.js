import React, {Component, Fragment} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar"
import Header from "./components/Header/Header"
import Search from "./pages/Search"
import Saved from "./pages/Saved"

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <NavBar />
          <Header />
          <Switch>
            <Route exact path="/" component={Search}/>
            <Route path="/saved" component={Saved}/>
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default App;
