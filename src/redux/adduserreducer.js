import * as types from "../actions/actionTypes";
import axios from "axios";

const initialState = {
  users: [],
  user: {},
  loading: false,
};

const userAddReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_USER:
      return { ...state, users: action.payload, loading: false };

    default:
      return state;
  }
};
