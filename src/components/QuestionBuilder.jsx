import React from "react";
import { useEffect, useState } from "react";
import Quiz from "./Quiz";

const QuestionBuilder = (props) => {
  const [questionArray, setQuestionArray] = useState([]);

  const { questionData } = props;

  useEffect(() => {
    setQuestionArray(
      questionData.map((index) => ({
        key: index.id,
        questionText: index.attributes.question_text,
        answerOptions: [index.attributes.answers.data],
      }))
    );
  }, [questionData]);

  if (questionArray.length === 0) {
    return null;
  }

  return <Quiz questions={questionArray} />;
};

export default QuestionBuilder;
