import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAmount, setDifficulty } from "../../redux/questions";
import { setPage } from "../../redux/pages";
import { RootState } from "../../redux/store";
import { Trophy, Shield } from "../../components/Icons";
import Input from "../../components/inputs/Inputs";
import { OrangeButton } from "../../components/buttons/Buttons";

import Welcome from "../../components/welcome/Welcome";
import StartBackground from "../../components/backgrounds/StartBackground";

import "./Start.scss";

const Start = () => {
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
    <div className="start-page">
      <div className="start-content">
        <Welcome />
        <Input
          name="difficulty"
          label="Difficulty"
          type="select"
          options={["easy", "medium", "hard"]}
          value={difficulty}
          onChange={difficultyChange}
          icon={<Trophy />}
        />
        <Input
          name="amount"
          label="No of Questions"
          type="text"
          value={amount}
          onChange={amountChange}
          icon={<Shield />}
        />
        <OrangeButton label="Start" onClick={start} />
        <StartBackground />
      </div>
    </div>
  );
};

export default Start;
