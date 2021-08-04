import React from "react";
import { Trophy, Shield } from "../../components/Icons";
import { TextInput, SelectInput } from "../../components/inputs/Inputs";
import {
  OrangeButton,
} from "../../components/buttons/Buttons";

import trivia_text from "../../assets/images/trivia.svg";

import desktop_illustration_1 from "../../assets/images/start-desktop-illustration-1.svg";
import desktop_illustration_2 from "../../assets/images/start-desktop-illustration-2.svg";
import desktop_illustration_3 from "../../assets/images/start-desktop-illustration-3.svg";
import desktop_illustration_4 from "../../assets/images/start-desktop-illustration-4.svg";

import mobile_illustration_1 from "../../assets/images/start-mobile-illustration-1.svg";
import mobile_illustration_2 from "../../assets/images/start-mobile-illustration-2.svg";
import mobile_illustration_3 from "../../assets/images/start-mobile-illustration-3.svg";
import mobile_illustration_4 from "../../assets/images/start-mobile-illustration-4.svg";

import "./Start.scss";

const Start = () => {
  return (
    <div className="start-page">
      <div className="start-content">
        <h3 className="welcome-text">Welcome to the</h3>
        <img src={trivia_text} alt="trivia text" className="trivia-text" />
        <div className="input-wrapper">
          <label htmlFor="difficulty" className="label">
            <Trophy />
            Difficulty
          </label>
          <SelectInput options={['easy', 'hard']}/>
        </div>
        <div className="input-wrapper">
          <label htmlFor="difficulty" className="label">
            <Shield />
            No of Questions
          </label>
          <TextInput />
        </div>
        <OrangeButton label="Start" />
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
    </div>
  );
};

export default Start;
