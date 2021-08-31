import React from "react";
import avatar from "../../assets/images/avatar.svg";
import close from "../../assets/images/close.svg";

import './Score.scss';

const Score = ({
  total,
  correctAnswers,
  onClose
}: {
  total: number;
  correctAnswers: number;
  onClose: () => void;
}) => {
  return (
    <div className="score">
    <img src={close} alt="" className="result-close-btn" onClick={onClose} />
      <img src={avatar} alt="" className="score__avatar" />
      <p className="score__text">
        You scored <span className="score__number">{correctAnswers}</span>/{total}
      </p>
    </div>
  );
};

export default Score;
