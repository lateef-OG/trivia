import React from "react";
import "./Buttons.scss";

export const OrangeButton = ({
  label,
  onClick,
}: {
  label: string;
  onClick: any;
}) => {
  return (
    <button className="button button--orange" onClick={onClick}>
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
