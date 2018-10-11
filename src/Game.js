import React, { Component } from 'react';

class Game extends Component {
  constructor(props) {
  	super(props);
    const question = this.newQuestion();
    
  	this.state = {
      value1: question.value1,
      value2: question.value2,
      value3: question.value3,
      proposedAnswer: question.proposedAnswer,
      numQuestions: 0,
      numCorrect: 0
    }  
  }
  
  updateQuestion = () => {
    	const question = this.newQuestion();
      	//const oldState = this.state;
      	this.setState(oldState => (question));
    }
  
  handleAnswer = (event) => {
    	const answer = event.target.name;
      	const correctAnswer = this.correctAnswer();
		const incrementNumCorrect = (String(correctAnswer) === answer) ? (this.state.numCorrect + 1) : this.state.numCorrect;
		const incrementNumQuestions	= this.state.numQuestions + 1;
      
      	this.updateQuestion();
      	this.setState(oldState => ({
          numQuestions: incrementNumQuestions,
          numCorrect: incrementNumCorrect,
        }));
    }
	
  
  correctAnswer = () => {
		const {value1, value2, value3, proposedAnswer} = this.state;
		const answer = value1 + value2 + value3;
		return (answer === proposedAnswer);
    }
  
  newQuestion = () => {
		const value1 = Math.floor(Math.random() * 100);
		const value2 = Math.floor(Math.random() * 100);
		const value3 = Math.floor(Math.random() * 100);
		const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
		return {value1, value2, value3, proposedAnswer};
	}
  
  render() {
    return (
      <div className="game">
        <h2>{this.props.name}</h2>
        <div className="equation">
          <p className="text">{`${this.state.value1} + ${this.state.value2} + ${this.state.value3} = ${this.state.proposedAnswer}`}</p>
        </div>
        <button onClick={this.handleAnswer} name="true">True</button>
        <button onClick={this.handleAnswer} name="false">False</button>
        <p className="text">
          Your Score: {this.state.numCorrect}/{this.state.numQuestions} <br />
          Correct Answers: {this.state.numCorrect}
        </p>
      </div>
    );
  }
}

export default Game;