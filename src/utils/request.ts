import Axios from 'axios';
import type { AxiosError } from 'axios';
import { AUTH_TOKEN } from '@/constants';

const request = Axios.create();

request.defaults.baseURL = BASE_URL;

request.interceptors.request.use((config) => {
  if (config.headers && config.headers.Authorization) {
    return config;
  }
  const token = window.localStorage.getItem(AUTH_TOKEN);
  if (token !== null) {
    Object.assign(config.headers || {}, {
      Authorization: `Bearer ${token}`,
    });
  }
  return config;
});

request.interceptors.response.use((res) => {
  // const { code, msg, message } = res.data;

  // if (+code !== 0) {
  //   const err = new Error(msg || message) as AxiosError;

  //   err.response = res;

  //   throw err;
  // }

  return res;
});

export { request };
