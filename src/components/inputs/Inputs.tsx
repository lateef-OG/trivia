import React from "react";
import { AnchorDown } from "../Icons";
import "./Inputs.scss";

export const TextInput = ({
  value,
  onChange,
}: {
  value: number;
  onChange: any;
}) => {
  return (
    <input
      type="text"
      className="text-input"
      value={value}
      onChange={onChange}
    />
  );
};

export const SelectInput = ({
  options,
  value,
  onChange,
}: {
  options: string[];
  value: string;
  onChange: any;
}) => {
  return (
    <div className="select-wrapper">
      <select name="" id="" value={value} onChange={onChange}>
        {options.map((option: string) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
      <AnchorDown />
    </div>
  );
};
