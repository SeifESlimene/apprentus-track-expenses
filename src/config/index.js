import axios from "axios";

// Base URL For All Our API Requests
const config = () => {
  axios.defaults.baseURL =
    process.env.NODE_ENV === "developement"
      ? process.env.REACT_APP_BASE_URI_DEVELOPEMENT
      : process.env.REACT_APP_BASE_URI_PRODUCTION;
};

export default config;
