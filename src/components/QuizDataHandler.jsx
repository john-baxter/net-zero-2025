import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import QuestionBuilder from "./QuestionBuilder";
import Quiz from "./Quiz";

const QuizDataHandler = () => {
  const [questions, setQuestions] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://fierce-inlet-05264.herokuapp.com/api/questions?populate=*")
      .then(({ data }) => {
        setQuestions(data.data);
        setLoading(false);
      })
      .catch((error) => setError(error));
  }, []);

  if (error) {
    // Print errors if any
    return <div>An error occured: {error.message}</div>;
  }
  if (!isLoading) {
    
    return <QuestionBuilder questionData={questions} />;
  }
};

export default QuizDataHandler;
