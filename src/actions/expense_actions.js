import { FETCHING_EXPENSE, FETCHED_SUCCESS, FETCHED_FAILED } from "./types";

import { addErrorMessage } from "./error_actions";

import { apiFetchExpense } from "../api/ExpenseApi";

export const fetchExpense = (month) => {
  return async (dispatch) => {
    try {
      dispatch({ type: FETCHING_EXPENSE });
      const { data } = await apiFetchExpense(month);
      dispatch({ type: FETCHED_SUCCESS, payload: data });
    } catch (e) {
      dispatch({ type: FETCHED_FAILED });
      dispatch(addErrorMessage(e));
    }
  };
};
