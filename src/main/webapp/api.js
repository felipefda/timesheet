import axios from 'axios';

export default axios.create({
  baseURL: `/api`,
  withCredentials: false,
  transformRequest: [(data) => JSON.stringify(data)],
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
});