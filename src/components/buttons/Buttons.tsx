import React from "react";
import "./Buttons.scss";

export const Button = ({
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

export const PurpleButton = ({
  label,
  onClick,
}: {
  label: string;
  onClick: any;
}) => {
  return (
    <button className="button button--purple" onClick={onClick}>
      {label}
    </button>
  );
};

export const OutlineButton = ({
  label,
  onClick,
}: {
  label: string;
  onClick: any;
}) => {
  return (
    <button className="button button--outline" onClick={onClick}>
      {label}
    </button>
  );
};
