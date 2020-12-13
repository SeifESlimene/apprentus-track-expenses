import {
  FETCHING_EXPENSE,
  FETCHED_SUCCESS,
  FETCHED_FAILED,
  UPDATE_NAME,
} from "./types";

import { addErrorMessage } from "./error_actions";

import { apiFetchExpense } from "../api/ExpenseApi";

apiFetchExpense().then(data => {console.log(data)});

export const fetchExpense = (month, year) => {
  return (dispatch) => {
    try {
      dispatch({ type: FETCHING_EXPENSE });
      apiFetchExpense(month, year).then((data) =>
        dispatch({ type: FETCHED_SUCCESS, payload: data })
      );
    } catch (e) {
      dispatch({ type: FETCHED_FAILED });
      console.log(e);
    }
  };
};

export const clickChanger = () => ({
  type: UPDATE_NAME,
});
