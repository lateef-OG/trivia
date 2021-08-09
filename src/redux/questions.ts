import { Dispatch } from 'redux';
import { Question, QuestionsInitialState } from '../types';
import { fetchQuestions } from '../api'


const SET_AMOUNT = "SET_AMOUNT";
const SET_DIFFICULTY = "SET_DIFFICULTY";
const SET_QUESTIONS = "SET_QUESTIONS";
const RESET_QUESTIONS = "RESET_QUESTIONS";
const SET_LOADING = "SET_LOADING";

const initialState: QuestionsInitialState = {
  amount: 0,
  difficulty: "easy",
  questions: [],
  loading: false,
};

const questionsReducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case SET_AMOUNT:
      return {
        ...state,
        amount: action.payload,
      };
    case SET_DIFFICULTY:
      return {
        ...state,
        difficulty: action.payload,
      };
    case SET_QUESTIONS:
      return {
        ...state,
        questions: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      }
    case RESET_QUESTIONS:
      return {
        ...state,
        amount: 0,
        difficulty: 'easy',
        questions: []
      }
    default:
      return state;
  }
};

export const setAmount = (amount: number) => {
  return{
    type: SET_AMOUNT,
    payload: amount,
  }
}

export const setDifficulty = (difficulty: string) => {
  return{
    type: SET_DIFFICULTY,
    payload: difficulty,
  }
}

export const setQuestions = (questions: Question[]) => {
  return {
    type: SET_QUESTIONS,
    payload: questions,
  }
}

export const setLoading = (loading: boolean) => {
  return {
    type: SET_LOADING,
    payload: loading
  }
}

export const resetQuestions = () => {
  return {
    type: RESET_QUESTIONS
  }
}

export const getQuestions = (amount: number, difficulty: string) => (dispatch: Dispatch) => {
  dispatch(setLoading(true))
  dispatch(setQuestions([]))
  fetchQuestions(amount, difficulty)
  .then(resJson => {
    dispatch(setLoading(false))
    dispatch(setQuestions(resJson.results))
  })
}

export default questionsReducer;
