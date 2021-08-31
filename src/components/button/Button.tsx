import React from "react";
import "./Button.scss";

const Button = ({
  label,
  onClick,
  type,
  customClass = ''
}: {
  label: string;
  onClick: any;
  type: string;
  customClass?: string;
}) => {
  return (
    <button className={`button button--${type} ${customClass}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;