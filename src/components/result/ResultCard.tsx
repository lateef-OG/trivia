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
      className={`result-card result-card--${isCorrect ? "correct" : "wrong"}`}
      key={question}
    >
      <p className="result-card__text" dangerouslySetInnerHTML={{ __html: question }} />
      <img className="result-card__img" src={isCorrect ? right : wrong} alt="" />
    </div>
  );
};

export default ResultCard;
