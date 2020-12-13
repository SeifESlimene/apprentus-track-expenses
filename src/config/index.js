import axios from 'axios';

const config = () => {
  axios.defaults.baseURL = 'http://localhost:5000/api/v1';
};

export default config;
