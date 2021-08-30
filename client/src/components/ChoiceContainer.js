import React from 'react';
import { CSSTransition } from 'react-transition-group';
import '../styles/choice.css';
import $ from 'jquery';

class ChoiceContainer extends React.Component {
    checkSubmit = () => this.props.isSubmitted ? null : this.props.changeChoice(this.props.answer.id)
    handleClick = () => {
        let checkBoxes = $("input[type=radio\\[\\]]");
        checkBoxes.prop("checked", !checkBoxes.prop("checked"));
        $("input:checked").closest("div").trigger("click").css({
            "color": "green",
            "border": "2px solid green"
        })
     }
    func = () => {
        this.checkSubmit()
        this.handleClick()
    }     
    render(){
        console.log(this.props.userChoice)
        return (
            <div
                className={`optionWrapper${this.props.isSubmitted ? ' disabled' : ''}`}
                onClick={this.func}
                role="button"
                tabIndex={0}
                answer-checked={`is${this.props.userChoice ? true : false}`}
                id={`radioInput${this.props.isCorrect ? 'submitted' : 'not'}`}
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
