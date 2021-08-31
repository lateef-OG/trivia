import { AnchorDown } from "../Icons";
import "./Inputs.scss";

const Input = ({
  type,
  icon,
  options = [],
  value,
  handleInput,
  name,
  label
}: {
  type: string;
  icon: any;
  options?: string[];
  value: string;
  handleInput: any;
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
          <select name={name} value={value} onChange={handleInput} className="input__select">
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
          onChange={handleInput}
        />
      }
    </div>
  );
};

export default Input;
