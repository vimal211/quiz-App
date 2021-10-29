import React, { Component } from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import "./Result.css";
import { Link } from "react-router-dom";

export default class Result extends Component {
  render() {
    let details = this.props.details;
    console.log(details);
    // console.log(this.props.location.state.crt);
    let percentage = 0;
    if (details.correct > 0) {
      percentage = Math.floor((details.correct / 15) * 100);
    }
    return (
      <div className="result_Container">
        <div className="head">
          <CheckCircleOutlineIcon style={{ fontSize: 120 }} />
          <h3>Result</h3>
        </div>
        <div className="body">
          <p className="h1">You need more practice!</p>
          <p className="h2">Your Score is : {percentage}%</p>
          <div>
            <p>Total number of questions:</p>
            <p>{details.total}</p>
          </div>
          <div>
            <p>Number of attempted questions:</p>
            <p>{details.attend}</p>
          </div>
          <div>
            <p>Number of correct answers:</p>
            <p>{details.correct}</p>
          </div>
          <div>
            <p>Number of wrong answers:</p>
            <p>{details.wrong}</p>
          </div>
        </div>
        <div className="bottom">
          <Link to="/quiz">
            <button className="play"> Play Again</button>
          </Link>
          <Link to="/">
            <button className="home">Back to Home</button>
          </Link>
        </div>
      </div>
    );
  }
}
