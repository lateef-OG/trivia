const UPDATE_ANSWERS = "UPDATE_ANSWERS";
const RESET_ANSWERS = "RESET_ANSWERS";

const initialState = {
  answers: [],
};

const answerReducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case UPDATE_ANSWERS:
      return {
        ...state,
        answers: [...state.answers, action.payload],
      };
    case RESET_ANSWERS:
      return {
        ...state,
        answers: [],
      };
    default:
      return state;
  }
};

export default answerReducer;

export const updateAnswers = (answerData: any) => {
  return {
    type: UPDATE_ANSWERS,
    payload: answerData,
  };
};

export const resetAnswers = () => {
  return {
    type: RESET_ANSWERS,
  };
};
