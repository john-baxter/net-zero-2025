import React, { useState } from 'react'
import { MDBBtn } from "mdb-react-ui-kit";

const Quiz = () => {
  const questions = [
		{
			questionText: 'What is climate change?',
			answerOptions: [
				{ answerText: 'World getting hot', isCorrect: false },
				{ answerText: 'World getting cold', isCorrect: false },
				{ answerText: 'Crazy weather', isCorrect: false },
				{ answerText: 'All of the above', isCorrect: true },
			],
		},
		{
			questionText: 'When does AND want to achieve Net Zero?',
			answerOptions: [
				{ answerText: '2030', isCorrect: false },
				{ answerText: '2025', isCorrect: true },
				{ answerText: '2090', isCorrect: false },
				{ answerText: '2050', isCorrect: false },
			],
		},
		{
			questionText: 'How much has the sea level risen since 1900?',
			answerOptions: [
				{ answerText: '21cm', isCorrect: true },
				{ answerText: '5cm', isCorrect: false },
				{ answerText: '1m', isCorrect: false },
				{ answerText: '12cm', isCorrect: false },
			],
		},
		{
			questionText: 'How much does AND aim to reduce in office energy consumption by 2023 & 2024?',
			answerOptions: [
				{ answerText: '25%', isCorrect: false },
				{ answerText: '10%', isCorrect: false },
				{ answerText: '75%', isCorrect: false },
				{ answerText: '50%', isCorrect: true },
			],
		},
    {
      questionText: "What is AND Digital's anual carbon footprint?",
      answerOptions: [
        { answerText: '100 Tonnes CO2', isCorrect: false},
        { answerText: '650 Tonnes CO2', isCorrect: true},
        { answerText: '1000 Tonnes CO2', isCorrect: false},
        { answerText: '20 Tonnes CO2', isCorrect: false},
      ],
    },
	];

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
    <div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
        
			) : (
        
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span className='question-title'>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<MDBBtn className='mx-20 my-auto bg-light text-dark border-dark hover-overlay' onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</MDBBtn>
						))}
					</div>
          </>
			)}
		</div>
    </>
  )
}

export default Quiz