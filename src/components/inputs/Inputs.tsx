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
  const Icon = icon;
  return (
    <div className="input">
      <label htmlFor={name} className="input__label">
        <Icon customClass="input__icon"/>
        {label}
      </label>
      {
        type === 'select' &&
        <div className="input__wrapper">
          <select name={name} value={value} onChange={onChange} className="input__select">
            {options.map((option: string) => (
              <option value={option} key={option}>
                {option}
              </option>
            ))}
          </select>
          <AnchorDown customClass="input__angle-down" />
        </div>
      }
      {
        type === 'text' &&
        <input
          name={name}
          type="text"
          className="input__text"
          value={value}
          onChange={onChange}
        />
      }
    </div>
  );
};

export default Input;
