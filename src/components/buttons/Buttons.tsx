import React from "react";
import "./Buttons.scss";

export const OrangeButton = ({ label, onClick }: {label: string, onClick: any}) => {
  return <button className="orange-button" onClick={onClick}>{label}</button>;
};

export const PurpleButton = ({ label, onClick }: {label: string, onClick: any}) => {
  return <button className="purple-button" onClick={onClick}>{label}</button>;
};

export const OutlineButton = ({ label, onClick }: {label: string, onClick: any}) => {
  return <button className="outline-button" onClick={onClick}>{label}</button>;
}
