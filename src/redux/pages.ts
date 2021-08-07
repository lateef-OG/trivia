const SET_PAGE = "SET_PAGE";

const initialState = {
  currentPage: "start",
};

const pageReducer = (
  state = initialState,
  action: { type: string; payload: string }
) => {
  switch (action.type) {
    case SET_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    default:
      return state;
  }
};

export default pageReducer;

export const setPage = (page: string) => {
  return {
    type: SET_PAGE,
    payload: page,
  };
};
