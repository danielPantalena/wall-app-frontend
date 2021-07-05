import axios from 'axios';

const storedToken = sessionStorage.token;

const baseURL = 'http://127.0.0.1:8000/';
const timeout = 3000;
const headers = {
  'Content-Type': 'application/json',
};

if (storedToken) headers.Authorization = `Token ${storedToken}`;

const instance = axios.create({ baseURL, timeout, headers });

const wallAppApi = {
  get: (url, headers) => instance.get(url, { headers }),
  post: (url, data, headers) => instance.post(url, data, { headers }),
  put: (url, data, headers) => instance.put(url, data, { headers }),
  delete: (url, headers) => instance.delete(url, { headers }),
};

export default wallAppApi;
