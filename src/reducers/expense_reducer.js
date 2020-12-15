import {
  FETCHING_EXPENSE,
  FETCH_EXPENSE_BY_ID,
  FETCHED_SUCCESS,
  EXPENSE_UPDATED,
  FETCHED_FAILED,
  UPDATE_FAILED,
  DELETE_EXPENSE,
  SAVE_EXPENSE,
  FETCHING_EXPENSE_BY_MONTH_YEAR,
} from "../actions/types";

const INITIAL_STATE = {
  fetching: false,
  expense: [],
  allMonth: false,
};

const expense_reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCHING_EXPENSE:
      return { ...state, fetching: true, allMonth: true };
    case FETCHING_EXPENSE_BY_MONTH_YEAR:
      return {
        ...state,
        fetching: true,
        allMonth: false,
        month: action.month,
        year: action.year,
      };
    case FETCH_EXPENSE_BY_ID:
      return { ...state, fetching: true };
    case FETCHED_SUCCESS:
      return { ...state, fetching: false, expense: action.payload };
    case EXPENSE_UPDATED:
      return { ...state, fetching: false };
    case DELETE_EXPENSE:
      return { ...state, fetching: false };
    case FETCHED_FAILED:
      return { ...state, fetching: false };
    case UPDATE_FAILED:
      return { ...state, fetching: false };
    case SAVE_EXPENSE:
      return { ...state, fetching: false };
    default:
      return state;
  }
};

export default expense_reducer;
