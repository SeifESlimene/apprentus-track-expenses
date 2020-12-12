import React from "react";
import ReactDOM from "react-dom";
// Navigation
import { BrowserRouter } from "react-router-dom";
// Import Kea Context
import { resetContext, getContext } from "kea";
// Import Provider
import { Provider } from "react-redux";
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

// Reset Kea Context
resetContext();

ReactDOM.render(
  // <React.StrictMode>
  <BrowserRouter>
    <Provider store={getContext().store}>
      <App />
    </Provider>
  </BrowserRouter>,
  // </React.StrictMode>,
  document.getElementById("root")
);
