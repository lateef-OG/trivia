import React from "react";
import spinner from "../../assets/images/loading.svg";

import './Loader.scss';

const Loader = () => {
  return (
    <div className="loading-container">
      <img src={spinner} alt="" className="loader" />
    </div>
  );
};

export default Loader;
