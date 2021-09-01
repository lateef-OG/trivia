import React from "react";
import { Answer } from "../../types";
import ResultCard from "./ResultCard";
import Button from "../button/Button";

import './Results.scss';

const Results = ({ answers, buttonAction }: { answers: Answer[], buttonAction: () => void }) => {
  return (
    <div className="results">
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
      <Button
        label="play again"
        type="orange"
        customClass="results__button"
        onClick={buttonAction}
      />
    </div>
  );
};

export default Results;
