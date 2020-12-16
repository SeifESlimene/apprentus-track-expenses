import axios from "axios";

// Base URL For All Our API Requests
const config = () => {
  axios.defaults.baseURL =
    process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_BASE_URI_PRODUCTION
      : process.env.REACT_APP_BASE_URI_DEVELOPEMENT;
};

export default config;
