import React, { Component } from "react";
import "./Quiz.css";
import quiz from "./questions.json";
import { Redirect, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import TimerIcon from "@mui/icons-material/Timer";
import "react-toastify/dist/ReactToastify.css";

export default class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: quiz,
      qNO: 1,
      correct: 0,
      wrong: 0,
      timer: 180,
      showResult: false,
    };
  }

  changeNext = () => {
    let number = this.state.qNO;
    if (number < 15) {
      this.setState({ qNO: number + 1 });
    }
    if (number === 15) {
      console.log(this.state);
      this.props.crtDetail(this.state);
      this.setState({ showResult: true });
    }
  };

  changePrev = () => {
    let number = this.state.qNO;
    if (number > 1) {
      this.setState({ qNO: number - 1, timer: 60 });
    } else {
      window.alert("This is the first question!!!");
    }
  };

  quitQuiz = () => {
    this.props.crtDetail(this.state);
  };

  checkAns = (selected) => {
    let corr = this.state.correct;
    let wro = this.state.wrong;
    let ans = this.state.questions[this.state.qNO - 1].answer;
    if (ans === selected) {
      this.setState({ correct: corr + 1 });
      toast.success("Correct Answer");
      setTimeout(() => {
        this.changeNext();
      }, 500);
    } else {
      toast.error("Wrong Answer");
      this.setState({ wrong: wro + 1 });
      setTimeout(() => {
        this.changeNext();
      }, 500);
    }
  };

  timer = () => {
    let time = this.state.timer;
    if (time === 0) {
      this.props.crtDetail(this.state);

      this.setState({ showResult: true });
    }
    this.setState({ timer: time - 1 });
  };

  interval = setInterval(() => this.timer(), 1000);

  render() {
    return (
      <div className="quiz_Container">
        <h1>Question</h1>
        <ToastContainer theme="colored" />

        <div className="question_container">
          <p>{this.state.qNO} of 15</p>
          <p>{this.state.questions[this.state.qNO - 1].question}</p>
          <div className="timer">
            <TimerIcon /> {this.state.timer}
          </div>
        </div>
        <div className="option_Container">
          <p
            onClick={() =>
              this.checkAns(this.state.questions[this.state.qNO - 1].optionA)
            }
            className="options"
          >
            {this.state.questions[this.state.qNO - 1].optionA}
          </p>
          <p
            onClick={() =>
              this.checkAns(this.state.questions[this.state.qNO - 1].optionB)
            }
            className="options"
          >
            {this.state.questions[this.state.qNO - 1].optionB}
          </p>
          <p
            onClick={() =>
              this.checkAns(this.state.questions[this.state.qNO - 1].optionC)
            }
            className="options"
          >
            {this.state.questions[this.state.qNO - 1].optionC}
          </p>
          <p
            onClick={() =>
              this.checkAns(this.state.questions[this.state.qNO - 1].optionD)
            }
            className="options"
          >
            {this.state.questions[this.state.qNO - 1].optionD}
          </p>
        </div>
        <div className="button_Container">
          <button className="prev" onClick={this.changePrev}>
            Previous
          </button>
          <button onClick={this.changeNext}>Next</button>
          {this.state.showResult && (
            <Redirect
              to={{
                pathname: "/result",
              }}
            ></Redirect>
          )}

          <Link to="/result">
            <button onClick={this.quitQuiz} className="quit">
              Quit
            </button>
          </Link>
        </div>
      </div>
    );
  }
}
