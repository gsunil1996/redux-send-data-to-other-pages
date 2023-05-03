import { GET_COUNT, SET_COUNT } from "../actionTypes/counterTypes";

const initialState = {
    count: 0,
    setCount: () => { },
};

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COUNT:
            return {
                ...state,
                count: action.payload
            }
        case SET_COUNT:
            return {
                ...state,
                setCount: action.payload,
            };
        default:
            return state
    }
}

export default counterReducer