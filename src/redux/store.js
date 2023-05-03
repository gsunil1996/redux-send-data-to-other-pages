import { createStore, combineReducers } from "redux";
import counterReducer from "./reducers/counterReducer";

const reducer = combineReducers({
    countValue: counterReducer
})

const store = createStore(
    reducer,
);

export default store;  