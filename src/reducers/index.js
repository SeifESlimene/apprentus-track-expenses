// import { combineReducers } from 'redux';

import expense from "./expense_reducer";

// export default combineReducers({
//     expense,
// });

const state = expense(undefined, {});
console.log(state);

export default expense;
