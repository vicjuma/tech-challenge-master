import React from 'react';
import './../styles/quiz.css';

class QuizeBlockContainer extends React.Component {
  render(){
    return (
      <div className="questionContainer">
          <p className="questionText">{this.props.question}</p>
          <img src={this.props.imgSrc} alt="text" />
      </div>
    );
  }
}

export default QuizeBlockContainer;