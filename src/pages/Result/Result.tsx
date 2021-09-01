import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { setPage } from "../../redux/pages";
import { resetAnswers } from "../../redux/answers";
import { resetQuestions } from "../../redux/questions";

import Stars from "../../components/result/Stars";
import Score from "../../components/result/Score";
import Results from "../../components/result/Results";

import { Answer } from "../../types";
import ResultBackground from "../../components/backgrounds/ResultBackground";
import Container from "../../components/container/Container";

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
    <Container backgroundColor="purple">
      <Score total={total} correctAnswers={correctAnswers} onClose={end} />
      <Stars total={total} correctAnswers={correctAnswers} />
      <Results answers={answers} buttonAction={playAgain} />
      <ResultBackground />
    </Container>
  );
};

export default Result;
