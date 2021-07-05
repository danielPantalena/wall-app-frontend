import axios from 'axios';

const storedToken = sessionStorage.token;

const baseURL = 'http://localhost:3000';
const timeout = 3000;
const headers = {
  'Content-Type': 'application/json',
};

if (storedToken) headers.Authorization = `Token ${storedToken}`;

const instance = axios.create({ baseURL, timeout, headers });

const api = {
  get: (url) => instance.get(url),
};

export default api;
