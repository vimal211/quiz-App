import React, { Component } from "react";
import "./App.css";
import Home from "./Components/Home";
import Quiz from "./Components/Quiz";
import Result from "./Components/Result";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      total: 15,
      attend: 15,
      correct: 0,
      wrong: 0,
    };
  }
  changeState = (e) => {
    let correct = e.correct;
    let wrong = e.wrong;
    this.setState({ correct: correct, wrong: wrong, attend: correct + wrong });
  };
  render() {
    const routes = (
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/quiz">
            <Quiz crtDetail={(args) => this.changeState(args)} />
          </Route>
          <Route path="/result">
            <Result details={this.state} />
          </Route>
        </Switch>
      </Router>
    );

    return <div className="App">{routes}</div>;
  }
}

export default App;
