import React from "react";
import spinner from "../../assets/images/loading.svg";

import './Loader.scss';

const Loader = () => {
  return (
    <div className="loader">
      <img src={spinner} alt="" className="loader__spinner" />
    </div>
  );
};

export default Loader;
