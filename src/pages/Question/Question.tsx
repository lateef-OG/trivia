import React from "react";
import { PurpleButton, OutlineButton } from "../../components/buttons/Buttons";
import Progress from "../../components/progress/Progress";

import desktop_illustration_1 from "../../assets/images/question-desktop-illustration-1.svg";
import desktop_illustration_2 from "../../assets/images/question-desktop-illustration-2.svg";
import desktop_illustration_3 from "../../assets/images/question-desktop-illustration-3.svg";
import desktop_illustration_4 from "../../assets/images/question-desktop-illustration-4.svg";

import mobile_illustration_1 from "../../assets/images/question-mobile-illustration-1.svg";
import mobile_illustration_2 from "../../assets/images/question-mobile-illustration-2.svg";
import mobile_illustration_3 from "../../assets/images/question-desktop-illustration-3.svg";
import mobile_illustration_4 from "../../assets/images/question-mobile-illustration-4.svg";
import mobile_illustration_5 from "../../assets/images/question-mobile-illustration-5.svg";

import "./Question.scss";

const Question = () => {
  return (
    <div className="question-page">
      <div className="question-content">
        <h2 className="category-text">Entertainment: Videogames</h2>
        <p className="difficulty">level 1</p>

        <Progress />

        <p className="question-text">
          The retail disc of Tony Hawk’s Pro Skater 5 only comes with the
          tutorial
        </p>

        <PurpleButton label="true" />
        <OutlineButton label="false" />
      </div>
      <img
        src={desktop_illustration_1}
        alt=""
        className="illustration desktop one"
      />
      <img
        src={desktop_illustration_2}
        alt=""
        className="illustration desktop two"
      />
      <img
        src={desktop_illustration_3}
        alt=""
        className="illustration desktop three"
      />
      <img
        src={desktop_illustration_4}
        alt=""
        className="illustration desktop four"
      />
      <img
        src={mobile_illustration_1}
        alt=""
        className="illustration mobile one"
      />
      <img
        src={mobile_illustration_2}
        alt=""
        className="illustration mobile two"
      />
      <img
        src={mobile_illustration_3}
        alt=""
        className="illustration mobile three"
      />
      <img
        src={mobile_illustration_4}
        alt=""
        className="illustration mobile four"
      />
      <img
        src={mobile_illustration_5}
        alt=""
        className="illustration mobile five"
      />
    </div>
  );
};

export default Question;
