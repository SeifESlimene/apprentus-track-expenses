// import { createStore } from "redux";
// import { devToolsEnhancer } from "redux-devtools-extension";
import reducers from "../reducers";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const middlewares = [thunk];

export default createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middlewares))
);

// export default createStore(reducers, devToolsEnhancer());
