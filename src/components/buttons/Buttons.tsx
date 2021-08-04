import React from "react";
import "./Buttons.scss";

export const OrangeButton = ({ label = "start" }) => {
  return <button className="orange-button">{label}</button>;
};

export const PurpleButton = ({ label = "start" }) => {
  return <button className="purple-button">{label}</button>;
};

export const OutlineButton = ({ label = "start"}) => {
  return <button className="outline-button">{label}</button>;
}
