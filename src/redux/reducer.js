import * as types from "./actiontype";
// import axios from "axios";
const initialState = {
  users: [],
  user: {},
  loading: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USERS:
      return { ...state, users: action.payload, loading: false };
    case types.ADD_USER:
      return { ...state, users: action.payload, loading: false };
    case types.DELETE_USER:

    default:
      return state;
  }
};

export default userReducer;
