import React, { useState, useEffect } from "react";

import "./Progress.scss";

const Progress = ({
  currentQuestion,
  total,
}: {
  currentQuestion: number;
  total: number;
}) => {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const width = (currentQuestion / total) * 100;
    setWidth(width);
  }, [currentQuestion, total]);
  return (
    <div className="progress">
      <p className="text">
        <span>{currentQuestion}</span>/{total}
      </p>
      <div className="outer-bar">
        <div className="inner-bar" style={{ width: `${width}%` }}></div>
      </div>
    </div>
  );
};

export default Progress;
