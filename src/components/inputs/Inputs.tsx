import React, { FC } from "react";
import { AnchorDown } from "../Icons";
import "./Inputs.scss";

const Input = ({
  type,
  icon,
  options = [],
  value,
  onChange,
  name,
  label
}: {
  type: string;
  icon: any;
  options?: string[];
  value: string;
  // onChange: ((e: React.ChangeEvent<HTMLInputElement>) => void) | ((e: React.ChangeEventHandler<HTMLSelectElement>) => void);
  onChange: any;
  name: string;
  label: string;
}) => {
  return (
    <div className="input-wrapper">
      <label htmlFor={name} className="label">
        {icon}
        {label}
      </label>
      {
        type === 'select' &&
        <div className="select-wrapper">
          <select name={name} value={value} onChange={onChange}>
            {options.map((option: string) => (
              <option value={option} key={option}>
                {option}
              </option>
            ))}
          </select>
          <AnchorDown />
        </div>
      }
      {
        type === 'text' &&
        <input
          name={name}
          type="text"
          className="text-input"
          value={value}
          onChange={onChange}
        />
      }
    </div>
  );
};

export default Input;
