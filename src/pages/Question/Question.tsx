import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { getQuestions } from "../../redux/questions";
import { updateAnswers } from "../../redux/answers";
import { setPage } from "../../redux/pages";

import { PurpleButton, OutlineButton } from "../../components/buttons/Buttons";
import Progress from "../../components/progress/Progress";

import loader from "../../assets/images/loading.svg";

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
  const dispatch = useDispatch();

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const { amount, difficulty, questions, loading } = useSelector(
    (state: RootState) => state.questions
  );

  useEffect(() => {
    dispatch(getQuestions(amount, difficulty));
  }, [amount, difficulty, dispatch]);

  const selectAnswer = (chosen_answer: string) => {
    const { question, correct_answer } = questions[currentQuestion];
    const answerObject = {
      question,
      correct_answer,
      chosen_answer,
    };
    dispatch(updateAnswers(answerObject));
    if (currentQuestion === questions.length - 1) {
      dispatch(setPage("result"));
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  return (
    <div className="question-page">
      <div className="question-content">
        {questions.length > 0 && (
          <>
            <h2 className="category-text">
              {questions[currentQuestion]?.category}
            </h2>
            <p className="difficulty">
              level {difficulty === "easy" ? "1" : "2"}
            </p>

            <Progress currentQuestion={currentQuestion + 1} total={amount} />

            <p className="question-text" dangerouslySetInnerHTML={{__html: questions[currentQuestion]?.question}} />

            <PurpleButton label="true" onClick={() => selectAnswer("True")} />
            <OutlineButton
              label="false"
              onClick={() => selectAnswer("False")}
            />
          </>
        )}
        {loading && (
          <div className="loading-container">
            <img src={loader} alt="" className="loader" />
          </div>
        )}
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
