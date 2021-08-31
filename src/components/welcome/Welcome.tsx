import React from "react";

import trivia_text from "../../assets/images/trivia.svg";

import './Welcome.scss';

const Welcome = () => {
  return (
    <div className="welcome">
      <h3 className="welcome__text">Welcome to the</h3>
      <img src={trivia_text} alt="trivia text" className="welcome__banner" />
    </div>
  );
};

export default Welcome;
