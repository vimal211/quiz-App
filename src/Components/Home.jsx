import React, { Component } from "react";
import "./Home.css";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div className="home_Container">
        <h3>Quiz App</h3>
        <button className="playBtn">
          <Link className="btn" to="/quiz">
            <p>Play</p>
          </Link>
        </button>
      </div>
    );
  }
}

export default Home;
