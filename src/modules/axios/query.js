import Axios from 'axios';
import { DOMAIN, PREFIX_COMPANY, Routes } from '../../api/api';
import { SET_TOKEN } from '../redux/slices/authSlice';

export const api = Axios.create({
  baseURL: DOMAIN + PREFIX_COMPANY,
  headers: {
    'Content-Type': 'application/json',
  },
});
export const setToken = (token) => {
  api.defaults.headers.common.Authorization = token;
};
// eslint-disable-next-line consistent-return
export const get = async (key, fn = () => {}, fail = () => {}) => {
  try {
    const route = typeof key === 'string' ? Routes.get[key] : key.join();
    const { data, status } = await api.post(route);
    if (status < 300) {
      fn(data);
      return data;
    }
  } catch (err) {
    fail(err);
    return null;
  }
};

export const post = (key, input, fn = () => {}, fail = () => {}, opt) => async (dispatch) => {
  try {
    const route = typeof key === 'string' ? Routes.post[key] : key.join();
    const { data, status } = await api.post(route, input, opt);
    if (status < 300) {
      fn(data);
      dispatch(SET_TOKEN(data));
      return data;
    }
  } catch (err) {
    fail(err);
    return null;
  }
  return null;
};
