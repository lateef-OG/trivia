import React from "react";

import desktop_illustration_1 from "../../assets/images/start-desktop-illustration-1.svg";
import desktop_illustration_2 from "../../assets/images/start-desktop-illustration-2.svg";
import desktop_illustration_3 from "../../assets/images/start-desktop-illustration-3.svg";
import desktop_illustration_4 from "../../assets/images/start-desktop-illustration-4.svg";

import mobile_illustration_1 from "../../assets/images/start-mobile-illustration-1.svg";
import mobile_illustration_2 from "../../assets/images/start-mobile-illustration-2.svg";
import mobile_illustration_3 from "../../assets/images/start-mobile-illustration-3.svg";
import mobile_illustration_4 from "../../assets/images/start-mobile-illustration-4.svg";

import "./background.scss";

const StartBackground = () => {
  return (
    <>
      <div className="bg bg--desktop">
        <img
          src={desktop_illustration_1}
          alt=""
          className="bg__illustration bg__illustration--top-left"
        />
        <img
          src={desktop_illustration_2}
          alt=""
          className="bg__illustration bg__illustration--top-right"
        />
        <img
          src={desktop_illustration_3}
          alt=""
          className="bg__illustration bg__illustration--bottom-left"
        />
        <img
          src={desktop_illustration_4}
          alt=""
          className="bg__illustration bg__illustration--bottom-right"
        />
      </div>
      <div className="bg bg--mobile">
        <img
          src={mobile_illustration_1}
          alt=""
          className="bg__illustration bg__illustration--top-left"
        />
        <img
          src={mobile_illustration_2}
          alt=""
          className="bg__illustration bg__illustration--top-right"
        />
        <img
          src={mobile_illustration_3}
          alt=""
          className="bg__illustration bg__illustration--bottom-left"
        />
        <img
          src={mobile_illustration_4}
          alt=""
          className="bg__illustration bg__illustration--bottom-right"
        />
      </div>
    </>
  );
};

export default StartBackground;
