import React, { useState } from "react";

import "./Progress.scss";

const Progress = () => {
    const [width, setWidth] = useState(30)
  return (
    <div className="progress">
      <p className="text">
        <span>08</span>/10
      </p>
      <div className="outer-bar">
        <div className="inner-bar" style={{ width: `${width}%` }}></div>
      </div>
    </div>
  );
};

export default Progress;
