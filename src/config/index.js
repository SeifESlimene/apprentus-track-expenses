import axios from "axios";

// Base URL For All Our API Requests
const config = () => {
  axios.defaults.baseURL = process.env.REACT_APP_BASE_URI;
};

export default config;
