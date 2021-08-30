import React from "react";

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

import './ResultBackground.scss';

const ResultBackground = () => {
  return (
    <>
      <img
        src={desktop_illustration_1}
        alt=""
        className="result-illustration desktop one"
      />
      <img
        src={desktop_illustration_2}
        alt=""
        className="result-illustration desktop two"
      />
      <img
        src={desktop_illustration_3}
        alt=""
        className="result-illustration desktop three"
      />
      <img
        src={desktop_illustration_4}
        alt=""
        className="result-illustration desktop four"
      />
      <img
        src={mobile_illustration_1}
        alt=""
        className="result-illustration mobile one"
      />
      <img
        src={mobile_illustration_2}
        alt=""
        className="result-illustration mobile two"
      />
      <img
        src={mobile_illustration_3}
        alt=""
        className="result-illustration mobile three"
      />
      <img
        src={mobile_illustration_4}
        alt=""
        className="result-illustration mobile four"
      />
      <img
        src={mobile_illustration_5}
        alt=""
        className="result-illustration mobile five"
      />
      <img
        src={mobile_illustration_6}
        alt=""
        className="result-illustration mobile six"
      />
    </>
  );
};

export default ResultBackground;
