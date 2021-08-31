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
    <div className="question">
      <h2 className="question__category">{category}</h2>
      <p className="question__difficulty">level {difficulty}</p>

      <Progress currentQuestion={currentQuestion} total={total} />

      <p
        className="question__text"
        dangerouslySetInnerHTML={{ __html: question }}
      />

      <PurpleButton label="true" onClick={() => selectAnswer("True")} />
      <OutlineButton label="false" onClick={() => selectAnswer("False")} />
    </div>
  );
};

export default Question;
