import { ADD_ERROR } from "./types";

export const addErrorMessage = (e) => {
  const {
    response: {
      data: { error },
    },
  } = e;

  return { type: ADD_ERROR, payload: error };
};