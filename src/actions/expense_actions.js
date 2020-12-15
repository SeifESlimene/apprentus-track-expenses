import {
  FETCHING_EXPENSE,
  FETCH_EXPENSE_BY_ID,
  FETCHING_EXPENSE_BY_MONTH_YEAR,
  SAVE_EXPENSE,
  EXPENSE_UPDATED,
  UPDATE_FAILED,
  DELETE_EXPENSE,
  FETCHED_SUCCESS,
  FETCHED_FAILED,
} from "./types";

import {
  apiFetchExpense,
  apiFetchExpenseByMonthYear,
  apiFetchExpenseById,
  apiUpdateExpense,
  apiDeleteExpense,
  apiSaveExpense,
} from "../api/ExpenseApi";

export const fetchExpense = () => {
  return (dispatch) => {
    dispatch({ type: FETCHING_EXPENSE });
    apiFetchExpense()
      .then((data) => {
        dispatch({ type: FETCHED_SUCCESS, payload: data });
      })
      .catch((e) => {
        dispatch({ type: FETCHED_FAILED });
      });
  };
};

export const fetchExpenseByMonthYear = (month, year) => {
  return (dispatch) => {
    dispatch({ type: FETCHING_EXPENSE_BY_MONTH_YEAR, month, year });
    apiFetchExpenseByMonthYear(month, year)
      .then((data) => {
        dispatch({ type: FETCHED_SUCCESS, payload: data });
      })
      .catch((e) => {
        dispatch({ type: FETCHED_FAILED });
      });
  };
};

export const fetchExpenseById = (id) => {
  return (dispatch) => {
    try {
      dispatch({ type: FETCH_EXPENSE_BY_ID });
      apiFetchExpenseById(id).then((data) => {
        dispatch({ type: FETCHED_SUCCESS, payload: data });
      });
    } catch (e) {
      dispatch({ type: FETCHED_FAILED });
    }
  };
};

export const saveExpense = (name, date, description, amount, approved) => {
  return (dispatch) => {
    apiSaveExpense(name, date, description, amount, approved);
    dispatch({ type: SAVE_EXPENSE });
  };
};

export const updateExpense = (
  id,
  name,
  date,
  description,
  amount,
  approved
) => {
  return (dispatch) => {
    apiUpdateExpense(id, name, date, description, amount, approved)
      .then((data) => {
        dispatch({ type: EXPENSE_UPDATED, payload: data });
      })
      .catch((e) => {
        dispatch({ type: UPDATE_FAILED });
      });
  };
};

export const deleteExpense = (id, month, year) => {
  return (dispatch) => {
    apiDeleteExpense(id).then(() => {
      dispatch({ type: DELETE_EXPENSE });
      apiFetchExpense(month, year).then((data) => {
        dispatch({ type: FETCHED_SUCCESS, payload: data });
      });
    });
  };
};
