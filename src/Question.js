import React, { Component } from 'react';

class Question extends Component {
  constructor(props) {
    super(props);
    const question = this.newQuestion();
  	this.state = {
      value1: question.value1,
      value2: question.value2,
      value3: question.value3,
      proposedAnswer: question.proposedAnswer
    }  
  }
  
  newQuestion = () => {
    const value1 = Math.floor(Math.random() * 100);
    const value2 = Math.floor(Math.random() * 100);
    const value3 = Math.floor(Math.random() * 100);
    const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
    return {value1, value2, value3, proposedAnswer};
  }

  checkAnswer = (choiceValue) => {
    const {value1, value2, value3, proposedAnswer} = this.state;
    const answer = value1 + value2 + value3;
    const scored = String((answer === proposedAnswer)) === choiceValue;
    this.props.updateScore(scored);
  }

  updateQuestion = () => {
    const question = this.newQuestion();
    this.setState(oldState => (question));
  }

  handleQuestion = (event) => {
    const choiceValue = event.target.name;
    this.checkAnswer(choiceValue);
    this.updateQuestion();
  }
  
  render() {
    return (
      <div>
        <div className="equation">
          <p className="text">{`${this.state.value1} + ${this.state.value2} + ${this.state.value3} = ${this.state.proposedAnswer}`}</p>
        </div>
        <button onClick={this.handleQuestion} name="true">True</button>
        <button onClick={this.handleQuestion} name="false">False</button>
      </div>
    );
  }
}

export default Question;