import React from "react";
import { useSelector } from "react-redux";
import { RootState } from './redux/store';
import Start from "./pages/Start/Start";
import Question from "./pages/Question/Question";
import Result from "./pages/Result/Result";


import "./App.scss";

function App() {
  const { currentPage } = useSelector((state: RootState ) => state.page );
  return (
      <>
        {
          currentPage === 'start' &&
          <Start />
        }
        {
          currentPage === 'questions' &&
          <Question />
        }
        {
          currentPage === 'result' &&
          <Result />
        }
      </>
  );
}

export default App;
