import React from "react";
import { AnchorDown } from '../Icons';
import "./Inputs.scss";

export const TextInput = () => {
  return <input type="text" className="text-input" />;
};

export const SelectInput = ({options}: {options: string[]}) => {
  return (
    <div className="select-wrapper">
      <select name="" id="">
        {
          options.map((option: string) => <option value={option} key={option}>{option}</option>)
        }
      </select>
      <AnchorDown />
    </div>
  );
};
