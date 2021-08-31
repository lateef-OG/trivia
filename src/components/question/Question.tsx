import React from "react";
import Progress from "../progress/Progress";
import { Button } from "../buttons/Buttons";

import "./Question.scss";

const Question = ({
  category,
  question,
  currentQuestion,
  total,
  selectAnswer,
  difficulty,
}: {
  category: string;
  question: string;
  currentQuestion: number;
  total: number;
  selectAnswer: (chosen_answer: string) => void;
  difficulty: string;
}) => {
  const level: { [key: string]: number } = {
    easy: 1,
    medium: 2,
    hard: 3,
  };
  return (
    <div className="question">
      <h2 className="question__category">{category}</h2>
      <p className="question__difficulty">level {level[difficulty]}</p>

      <Progress currentQuestion={currentQuestion} total={total} />

      <p
        className="question__text"
        dangerouslySetInnerHTML={{ __html: question }}
      />

      <Button
        label="true"
        onClick={() => selectAnswer("True")}
        type="purple"
        customClass="question__button"
      />
      <Button
        label="false"
        onClick={() => selectAnswer("False")}
        type="outline"
        customClass="question__button"
      />
    </div>
  );
};

export default Question;
