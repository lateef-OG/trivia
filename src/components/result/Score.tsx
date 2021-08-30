import React from "react";
import avatar from "../../assets/images/avatar.svg";

import './Score.scss';

const Score = ({
  total,
  correctAnswers,
}: {
  total: number;
  correctAnswers: number;
}) => {
  return (
    <div className="score">
      <img src={avatar} alt="" className="avatar" />
      <p className="score-text">
        You scored <span>{correctAnswers}</span>/{total}
      </p>
    </div>
  );
};

export default Score;
