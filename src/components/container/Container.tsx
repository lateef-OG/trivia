import React from "react";

import './Container.scss';

const Container = ({ children, backgroundColor }: { children: React.ReactNode, backgroundColor: string }) => {
  return (
    <div className={`container container--${backgroundColor}`}>
      <div className="container__content">{children}</div>
    </div>
  );
};

export default Container;
