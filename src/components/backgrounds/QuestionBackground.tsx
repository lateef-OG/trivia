import React from "react";

import desktop_illustration_1 from "../../assets/images/question-desktop-illustration-1.svg";
import desktop_illustration_2 from "../../assets/images/question-desktop-illustration-2.svg";
import desktop_illustration_3 from "../../assets/images/question-desktop-illustration-3.svg";
import desktop_illustration_4 from "../../assets/images/question-desktop-illustration-4.svg";

import mobile_illustration_1 from "../../assets/images/question-mobile-illustration-1.svg";
import mobile_illustration_2 from "../../assets/images/question-mobile-illustration-2.svg";
import mobile_illustration_3 from "../../assets/images/question-desktop-illustration-3.svg";
import mobile_illustration_4 from "../../assets/images/question-mobile-illustration-4.svg";
import mobile_illustration_5 from "../../assets/images/question-mobile-illustration-5.svg";

import './QuestionBackground.scss'

const QuestionBackground = () => {
  return (
    <>
      <img
        src={desktop_illustration_1}
        alt=""
        className="question-illustration desktop one"
      />
      <img
        src={desktop_illustration_2}
        alt=""
        className="question-illustration desktop two"
      />
      <img
        src={desktop_illustration_3}
        alt=""
        className="question-illustration desktop three"
      />
      <img
        src={desktop_illustration_4}
        alt=""
        className="question-illustration desktop four"
      />
      <img
        src={mobile_illustration_1}
        alt=""
        className="question-illustration mobile one"
      />
      <img
        src={mobile_illustration_2}
        alt=""
        className="question-illustration mobile two"
      />
      <img
        src={mobile_illustration_3}
        alt=""
        className="question-illustration mobile three"
      />
      <img
        src={mobile_illustration_4}
        alt=""
        className="question-illustration mobile four"
      />
      <img
        src={mobile_illustration_5}
        alt=""
        className="question-illustration mobile five"
      />
    </>
  );
};

export default QuestionBackground;
