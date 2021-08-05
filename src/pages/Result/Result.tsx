import React from "react";
import { Star } from "../../components/Icons";
import { OrangeButton } from "../../components/buttons/Buttons";

import avatar from "../../assets/images/avatar.svg";
import wrong from "../../assets/images/wrong.svg";
import right from "../../assets/images/right.svg";

import desktop_illustration_1 from "../../assets/images/result-desktop-illustration-1.svg";
import desktop_illustration_2 from "../../assets/images/result-desktop-illustration-2.svg";
import desktop_illustration_3 from "../../assets/images/result-desktop-illustration-3.svg";
import desktop_illustration_4 from "../../assets/images/result-desktop-illustration-4.svg";

import mobile_illustration_1 from "../../assets/images/result-mobile-illustration-1.svg";
import mobile_illustration_2 from "../../assets/images/result-mobile-illustration-2.svg";
import mobile_illustration_3 from "../../assets/images/result-mobile-illustration-3.svg";
import mobile_illustration_4 from "../../assets/images/result-mobile-illustration-4.svg";
import mobile_illustration_5 from "../../assets/images/result-mobile-illustration-5.svg";
import mobile_illustration_6 from "../../assets/images/result-mobile-illustration-6.svg";

import "./Result.scss";

const Result = () => {
  return (
    <div className="result-page">
      <div className="result-section">
        <div className="score">
          <img src={avatar} alt="" className="avatar" />
          <p className="score-text">
            You scored <span>08</span>/10
          </p>
        </div>
        <div className="stars">
          {Array.from(Array(10).keys()).map((item, index) => {
            const score = 8;
            let fill = "#969CDC"
            if((index + 1)  <= score) fill = "#FF7C7C";
            return <Star fill={fill} />;
          })}
        </div>
        <div className="questions correct">
          <p>The retail disc of Tony Hawk’s Pro Skater 5 only comes with the tutorial.</p>
          <img src={right} alt="" />
        </div>
        <div className="questions wrong">
          <p>In “Metal Gear Solid 2”, you will see through the eyes of Psycho Mantis if you go first person during his boss fight.</p>
          
          <img src={wrong} alt="" />
        </div>
        <OrangeButton label="play again" />
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
      <img
        src={mobile_illustration_6}
        alt=""
        className="illustration mobile six"
      />
    </div>
  );
};

export default Result;
