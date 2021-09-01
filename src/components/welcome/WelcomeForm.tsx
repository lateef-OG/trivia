import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAmount, setDifficulty } from "../../redux/questions";
import { setPage } from "../../redux/pages";
import { RootState } from "../../redux/store";

import Input from "../inputs/Inputs";
import { Trophy, Shield } from "../Icons";
import Button from "../button/Button";

import './WelcomeForm.scss';

const WelcomeForm = () => {
  const dispatch = useDispatch();

  const { amount, difficulty } = useSelector(
    (state: RootState) => state.questions
  );
  const amountChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    let isnum = /^\d+$/.test(value);
    if (isnum || value === "") dispatch(setAmount(Number(value)));
  };
  const difficultyChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    dispatch(setDifficulty(value));
  };

  const start = (): void => {
    if (amount > 0) dispatch(setPage("questions"));
    else alert("No of questions must be greater than 0");
  };
  return (
    <div className="welcome-form">
      <Input
        name="difficulty"
        label="Difficulty"
        type="select"
        options={["easy", "medium", "hard"]}
        value={difficulty}
        handleInput={difficultyChange}
        icon={Trophy}
      />
      <Input
        name="amount"
        label="No of Questions"
        type="text"
        value={amount}
        handleInput={amountChange}
        icon={Shield}
      />
      <Button
        label="Start"
        onClick={start}
        customClass="welcome-form__button"
        type="orange"
      />
    </div>
  );
};

export default WelcomeForm;
