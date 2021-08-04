import { createStore, combineReducers } from "redux";

const reducer = combineReducers({
    // home: homeReducer,
    // auth: authReducer
})

export const store = createStore(reducer);