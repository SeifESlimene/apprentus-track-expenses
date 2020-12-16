// React
import React from "react";
import ReactDOM from "react-dom";
// Navigation
import { BrowserRouter } from "react-router-dom";
// Design
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "antd/dist/antd.css";
import "./App.css";
// Our Main App
import App from "./App";
// Redux Store
import { Provider } from "react-redux";
import store from "./store";
import config from "./config";

config();

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
