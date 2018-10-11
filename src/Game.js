import React, { Component } from 'react';
import Question from './Question';
import Score from './Score';

class Game extends Component {
  constructor(props) {
  	super(props);
    this.state = {
      numQuestions: 0,
      numCorrect: 0
    }
  }
  
  updateScore = (scored) => {
    const incrementNumQuestions	= this.state.numQuestions + 1;
    const incrementNumCorrect = (scored) ? (this.state.numCorrect + 1) : this.state.numCorrect;
    this.setState(oldState => ({
      numQuestions: incrementNumQuestions,
      numCorrect: incrementNumCorrect
    }));
  }
  
  render() {
    return (
      <div className="game">
        <h2>{this.props.name}</h2>
    	<Question updateScore={this.updateScore}/>
		<Score 
			numCorrect={this.state.numCorrect}
			numQuestions={this.state.numQuestions}/>
      </div>
    );
  }
}

export default Game;