import axios from "axios";

// Base URL For All Our API Requests
const config = () => {
  axios.defaults.baseURL =
    process.env.REACT_APP_NODE_ENV === "developement"
      ? process.env.REACT_APP_BASE_URI_DEVELOPEMENT
      : process.env.REACT_APP_BASE_URI_PRODUCTION;
  console.log(axios.defaults.baseURL);
};

export default config;
