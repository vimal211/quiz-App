import React, { Component } from "react";
import "./Quiz.css";
import quiz from "./questions.json";
import { Redirect, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: quiz,
      qNO: 1,
      correct: 0,
      wrong: 0,
      timer: 60,
      showResult: false,
    };
  }

  changeNext = () => {
    let number = this.state.qNO;
    if (number < 15) {
      this.setState({ qNO: number + 1, timer: 60 });
    }
    if (number === 15) {
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
      toast.success("Correct Answer");
      setTimeout(this.setState({ correct: corr + 1 }), 5000);
      // this.setState({ correct: corr + 1 });
    } else {
      toast.error("Wrong Answer");
      this.setState({ wrong: wro + 1 });
    }
    console.log(this.state.correct, this.state.wrong);
    this.changeNext();
  };
  timer = () => {
    let time = this.state.timer;
    this.setState({ timer: time - 1 });
    return time;
  };

  render() {
    return (
      <div className="quiz_Container">
        <h1>Question</h1>
        <ToastContainer theme="colored" />
        <div className="question_container">
          <p>{this.state.qNO} of 15</p>
          <p>{this.state.questions[this.state.qNO - 1].question}</p>
          <div className="timer">{}</div>
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
