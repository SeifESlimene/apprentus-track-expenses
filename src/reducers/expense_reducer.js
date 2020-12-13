import {
  FETCHED_FAILED,
  FETCHED_SUCCESS,
  FETCHING_EXPENSE,
} from "../actions/types";

const INITIAL_STATE = {
  fetching: false,
  expense: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCHING_EXPENSE:
      return { ...state, fetching: true };
    case FETCHED_SUCCESS:
      const expense = action.payload;
      return { ...state, fetching: false, expense };
    case FETCHED_FAILED:
      return { ...state, fetching: false };
    default:
      return state;
  }
};
