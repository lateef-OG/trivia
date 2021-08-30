import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { setPage } from "../../redux/pages";
import { resetAnswers } from "../../redux/answers";
import { resetQuestions } from "../../redux/questions";

import { OrangeButton } from "../../components/buttons/Buttons";
import Stars from "../../components/result/Stars";
import Score from "../../components/result/Score";
import Results from "../../components/result/Results";

import close from "../../assets/images/close.svg";

import "./Result.scss";
import { Answer } from "../../types";
import ResultBackground from "../../components/backgrounds/ResultBackground";

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
        <Score total={total} correctAnswers={correctAnswers} />
        <Stars total={total} correctAnswers={correctAnswers} />
        <Results answers={answers} />
        <OrangeButton label="play again" onClick={playAgain} />
      </div>
      <ResultBackground />
    </div>
  );
};

export default Result;
