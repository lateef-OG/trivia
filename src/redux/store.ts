import { createStore, combineReducers, applyMiddleware } from "redux";
import questionsReducer from "./questions";
import answerReducer from "./answers";
import pageReducer from "./pages";
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    questions: questionsReducer,
    answers: answerReducer,
    page: pageReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(thunk));