import { GET_COUNT, SET_COUNT } from "../actionTypes/counterTypes";

export const getCountAction = count => ({
    type: GET_COUNT,
    payload: count,
});

export const setCountAction = setCount => ({
    type: SET_COUNT,
    payload: setCount,
});