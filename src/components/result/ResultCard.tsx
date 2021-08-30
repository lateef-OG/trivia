import React from "react";
import wrong from "../../assets/images/wrong.svg";
import right from "../../assets/images/right.svg";

import './ResultCard.scss'

const ResultCard = ({ isCorrect, question }: {
    isCorrect: boolean;
    question: string;
}) => {
  return (
    <div
      className={`result ${isCorrect ? "correct" : "wrong"}`}
      key={question}
    >
      <p dangerouslySetInnerHTML={{ __html: question }} />
      <img src={isCorrect ? right : wrong} alt="" />
    </div>
  );
};

export default ResultCard;
