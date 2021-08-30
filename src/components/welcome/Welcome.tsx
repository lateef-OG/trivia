import React from "react";

import trivia_text from "../../assets/images/trivia.svg";

import './Welcome.scss';

const Welcome = () => {
  return (
    <>
      <h3 className="welcome-text">Welcome to the</h3>
      <img src={trivia_text} alt="trivia text" className="trivia-text" />
    </>
  );
};

export default Welcome;
