import React from "react";
import { Answer } from "../../types";
import ResultCard from "./ResultCard";

const Results = ({ answers }: { answers: Answer[] }) => {
  return (
    <>
      {answers.map((answer: Answer) => {
        const { question, correct_answer, chosen_answer } = answer;
        const isCorrect = correct_answer === chosen_answer;
        return (
          <ResultCard
            key={question}
            isCorrect={isCorrect}
            question={question}
          />
        );
      })}
    </>
  );
};

export default Results;
