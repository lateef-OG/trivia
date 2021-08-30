import React from "react";
import Progress from "../progress/Progress";
import { PurpleButton, OutlineButton } from "../buttons/Buttons";

import './Questions.scss';

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
  return (
    <>
      <h2 className="category-text">{category}</h2>
      <p className="difficulty">level {difficulty}</p>

      <Progress currentQuestion={currentQuestion} total={total} />

      <p
        className="question-text"
        dangerouslySetInnerHTML={{ __html: question }}
      />

      <PurpleButton label="true" onClick={() => selectAnswer("True")} />
      <OutlineButton label="false" onClick={() => selectAnswer("False")} />
    </>
  );
};

export default Question;
