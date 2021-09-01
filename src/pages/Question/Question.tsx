import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { getQuestions } from "../../redux/questions";
import { updateAnswers } from "../../redux/answers";
import { setPage } from "../../redux/pages";

import Container from "../../components/container/Container";
import Question from "../../components/question/Question";
import Loader from "../../components/loader";
import QuestionBackground from "../../components/backgrounds/QuestionBackground";

const QuestionPage = () => {
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
    <Container backgroundColor="white">
      {questions?.length > 0 && (
        <Question
          category={questions[currentQuestion]?.category}
          difficulty={difficulty}
          question={questions[currentQuestion]?.question}
          currentQuestion={currentQuestion + 1}
          total={amount}
          selectAnswer={selectAnswer}
        />
      )}
      {loading && <Loader />}
      <QuestionBackground />
    </Container>
  );
};

export default QuestionPage;
