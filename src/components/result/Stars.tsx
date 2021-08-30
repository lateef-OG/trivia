import React from "react";

import { Star } from "../Icons";

import './Stars.scss';

const Stars = ({
  total,
  correctAnswers,
}: {
  total: number;
  correctAnswers: number;
}) => {
  return (
    <div className="stars">
      {Array.from(Array(total).keys()).map((item, index) => {
        const score = correctAnswers;
        let fill = "#969CDC";
        if (index + 1 <= score) fill = "#FF7C7C";
        return <Star fill={fill} key={item} />;
      })}
    </div>
  );
};

export default Stars;
