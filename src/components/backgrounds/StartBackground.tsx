import React from "react";

import desktop_illustration_1 from "../../assets/images/start-desktop-illustration-1.svg";
import desktop_illustration_2 from "../../assets/images/start-desktop-illustration-2.svg";
import desktop_illustration_3 from "../../assets/images/start-desktop-illustration-3.svg";
import desktop_illustration_4 from "../../assets/images/start-desktop-illustration-4.svg";

import mobile_illustration_1 from "../../assets/images/start-mobile-illustration-1.svg";
import mobile_illustration_2 from "../../assets/images/start-mobile-illustration-2.svg";
import mobile_illustration_3 from "../../assets/images/start-mobile-illustration-3.svg";
import mobile_illustration_4 from "../../assets/images/start-mobile-illustration-4.svg";

import './StartBackground.scss';

const StartBackground = () => {
  return (
    <>
      <img
        src={desktop_illustration_1}
        alt=""
        className="start-illustration desktop one"
      />
      <img
        src={desktop_illustration_2}
        alt=""
        className="start-illustration desktop two"
      />
      <img
        src={desktop_illustration_3}
        alt=""
        className="start-illustration desktop three"
      />
      <img
        src={desktop_illustration_4}
        alt=""
        className="start-illustration desktop four"
      />
      <img
        src={mobile_illustration_1}
        alt=""
        className="start-illustration mobile one"
      />
      <img
        src={mobile_illustration_2}
        alt=""
        className="start-illustration mobile two"
      />
      <img
        src={mobile_illustration_3}
        alt=""
        className="start-illustration mobile three"
      />
      <img
        src={mobile_illustration_4}
        alt=""
        className="start-illustration mobile four"
      />
    </>
  );
};

export default StartBackground;
