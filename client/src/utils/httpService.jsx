import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || '', // '' uses proxy in dev, URL used in production
});

api.interceptors.response.use(null, error => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  if (!expectedError) {
    //console.log('Unexpected error occured!');
  }

  return Promise.reject(error);
});

export default {
  get: api.get,
  post: api.post,
  put: api.put,
  delete: api.delete,
};
