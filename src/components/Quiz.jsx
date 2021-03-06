import React, { useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
} from "mdb-react-ui-kit";


const Quiz = (props) => {
  const { questions } = props;

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <>
      <div className="quiz-app rounded mt-5 shadow-4">
        {showScore ? (
          <div className="score-section">
            You scored {score} out of {questions.length}
          </div>
        ) : (
          <>
            <MDBContainer>
              <MDBRow>
                <div className="question-count">
                  <span className="question-title">
                    Question {currentQuestion + 1}
                  </span>
                  /{questions.length}
                </div>
                <div className="question-text">
                  {questions[currentQuestion].questionText}
                </div>
              </MDBRow>
              <MDBRow>
              {questions[currentQuestion].answerOptions[0].map((index) => (
                <MDBBtn
                  key={index.id}
                  className="mx-20 my-1 bg-light text-dark border-dark hover-overlay"
                  onClick={() =>
                    handleAnswerOptionClick(index.attributes.is_correct)
                  }
                >
                  {index.attributes.answer_text}
                </MDBBtn>
              ))}
            </MDBRow>
              </MDBContainer>
          </>
        )}
      </div>
    </>
  );
};

export default Quiz;
