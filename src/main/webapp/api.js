import axios from 'axios';

export default axios.create({
  baseURL: `http://localhost:8118/api`,
  withCredentials: false,
  transformRequest: [(data) => JSON.stringify(data)],
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
});