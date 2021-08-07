import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";

import { setPage } from "../../redux/pages";
import { resetAnswers } from "../../redux/answers";
import { resetQuestions } from "../../redux/questions";

import { Star } from "../../components/Icons";
import { OrangeButton } from "../../components/buttons/Buttons";

import avatar from "../../assets/images/avatar.svg";
import wrong from "../../assets/images/wrong.svg";
import right from "../../assets/images/right.svg";
import close from "../../assets/images/close.svg";

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
import { Answer } from "../../types";

const Result = () => {
  const dispatch = useDispatch();

  const { answers }: { answers: Answer[] } = useSelector(
    (state: RootState) => state.answers
  );
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const rightAnswers = answers.filter(
      (answer: Answer) => answer.chosen_answer === answer.correct_answer
    );
    setCorrectAnswers(rightAnswers.length);
    setTotal(answers.length);
  }, [answers]);

  const playAgain = () => {
    dispatch(setPage("questions"));
    dispatch(resetAnswers());
  };

  const end = () => {
    dispatch(setPage("start"));
    dispatch(resetAnswers());
    dispatch(resetQuestions());
  };

  return (
    <div className="result-page">
      <div className="result-section">
        <img src={close} alt="" className="close" onClick={end} />
        <div className="score">
          <img src={avatar} alt="" className="avatar" />
          <p className="score-text">
            You scored <span>{correctAnswers}</span>/{total}
          </p>
        </div>
        <div className="stars">
          {Array.from(Array(total).keys()).map((item, index) => {
            const score = correctAnswers;
            let fill = "#969CDC";
            if (index + 1 <= score) fill = "#FF7C7C";
            return <Star fill={fill} key={item} />;
          })}
        </div>
        {answers.map((answer: Answer) => {
          const { question, correct_answer, chosen_answer } = answer;
          return (
            <div
              className={`questions ${
                correct_answer === chosen_answer ? "correct" : "wrong"
              }`}
              key={question}
            >
              <p dangerouslySetInnerHTML={{ __html: question }} />
              <img
                src={correct_answer === chosen_answer ? right : wrong}
                alt=""
              />
            </div>
          );
        })}
        <OrangeButton label="play again" onClick={playAgain} />
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
