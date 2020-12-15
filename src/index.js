// React
import React from "react";
import ReactDOM from "react-dom";
// Navigation
import { BrowserRouter } from "react-router-dom";
// Font Awesome
import "@fortawesome/fontawesome-free/css/all.min.css";
// Bootstrap
import "bootstrap-css-only/css/bootstrap.min.css";
// Material Design For Bootstrap
import "mdbreact/dist/css/mdb.css";
// Our Main App
import App from "./App";
import "./App.css";
import "antd/dist/antd.css";
// Redux Store
import { Provider } from "react-redux";
import store from "./store";
import config from "./config";

config();

ReactDOM.render(
  // Router Wrapper
  <BrowserRouter>
    {/* Redux Wrapper */}
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
