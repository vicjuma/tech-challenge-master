import React from 'react';
import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import Animation from 'react-animate-height';
import ChoicesContainer from "./ChoicesContainer";
import FeedbackContainer from "./FeedbackContainer";
import ResetContainer from "./ResetContainer";
import QuizeBlockContainer from "./QuizeBlockContainer";
import './../styles/block.css';

const CheckBlockContainer = (props) => {
    // map through the answers array to fnd the correct answer in the inCorrect property of each 
    // answer object
    const answer = props.question.answers.filter((correct) => correct.isCorrect === true)
    // Setting initial state of user choice
    const [isSubmited, setIsSubmitted] = useState(false);
    // Setting initial state of user submit action
    const [choice, setChoice] = useState(null);

    const isCorrectChoice = choice === answer[0].id;
    /**
     * Reset Quiz
     */
    const resetQuiz = () => {
        setIsSubmitted(false);
        setChoice(null);
    }
    const nodeRef = React.useRef(null)
    // render the components
    return (
        // passing props from parent to child components
        <div className="container">
            <QuizeBlockContainer imgSrc={props.question.question.media.url} question={props.question.question.text} />
            <ChoicesContainer
                answers={props.question.answers}
                userChoice={choice}
                changeChoice={setChoice}
                isSubmitted={isSubmited}
                correctAnswer={answer[0].text}
            />
            <CSSTransition nodeRef={nodeRef} in={!isSubmited} timeout={200} classNames="submitButton">
                <button 
                    className={`submitButton${!choice ? ' disabled' : ''}`}
                    onClick={() => setIsSubmitted(true)}
                    disabled={!choice}
                    ref={nodeRef}
                >
                    Submit
                </button>
            </CSSTransition>
            <Animation duration={500} height={isSubmited ? 'auto' : 0}>
                <CSSTransition nodeRef={nodeRef} in={isSubmited} timeout={1200} classNames="feedbackBlock">
                    <div ref={nodeRef}>
                        <FeedbackContainer
                            feedback={props.question.feedback}
                            isCorrectChoice={isCorrectChoice}
                        />
                        <ResetContainer resetQuestion={resetQuiz} />
                    </div>
                </CSSTransition>                
            </Animation>
        </div>
    )
}

export default CheckBlockContainer;