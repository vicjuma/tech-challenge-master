import React from 'react';
import { CSSTransition } from 'react-transition-group';
import '../styles/choice.css';

class ChoiceContainer extends React.Component {
    render(){
        return (
            <div
                className={`optionWrapper${this.props.isSubmitted ? ' disabled' : ''}`}
                onClick={() => this.props.isSubmitted ? null : this.props.changeChoice(this.props.answer.id)}
                role="button"
                tabIndex={0}
            >
                <label>
                    <input
                        type="radio"
                        name={`option-${this.props.answer.id}`}
                        value={this.props.answer.id}
                        checked={this.props.userChoice === this.props.answer.id}
                        onChange={() => this.props.changeChoice(this.props.answer.id)}
                        className="radioInput"
                        disabled={this.props.isSubmitted}
                    />
                    <div className={`radioInput${this.props.isSubmitted ? ' submitted' : ''}`} data-correct-answer={this.props.isCorrect} />
                    
                    {this.props.answer.text}
                </label>
                <CSSTransition in={this.props.isSubmitted && this.props.isCorrect === this.props.answer.id} timeout={1500} classNames="optionBorder">
                    <div className="border" />
                </CSSTransition>
            </div>
        );
    }
}

export default ChoiceContainer;
