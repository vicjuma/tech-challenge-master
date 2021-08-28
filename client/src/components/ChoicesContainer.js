import React from 'react';
import ChoiceContainer from './ChoiceContainer';
import '../styles/choices.css';

class ChoicesContainer extends React.Component{
    render(){
        return (
            <div className="optionsContainer">
                {this.props.answers.map(answer => (
                    <ChoiceContainer
                        key={answer.id}
                        answer={answer}
                        userChoice={this.props.userChoice}
                        changeChoice={this.props.changeChoice}
                        isSubmitted={this.props.isSubmitted}
                        isCorrect={answer.isCorrect}
                    />
                ))}
            </div>
        );
    }
}

export default ChoicesContainer;
