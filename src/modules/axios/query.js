import Axios from 'axios';
import { DOMAIN, PREFIX_COMPANY, Routes } from '../../api/api';
import { SET_TOKEN } from '../redux/slices/authSlice';
import { SET_USER_DETAIL, SET_USERS } from '../redux/slices/usersListSlice';

export const api = Axios.create({
  baseURL: DOMAIN + PREFIX_COMPANY,
  headers: {
    'Content-Type': 'application/json',
  },
});
export const setToken = (token) => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
};
// eslint-disable-next-line consistent-return
export const getUsersList = (key) => async (dispatch) => {
  try {
    const route = typeof key === 'string' ? Routes.get[key] : key.join();
    const { data, status } = await api.get(route);
    if (status < 300) {
      dispatch(SET_USERS(data));
      return data;
    }
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const getUserDetail = (key, id) => async (dispatch) => {
  try {
    const route = typeof key === 'string' ? Routes.get[key] : key.join();
    const { data, status } = await api.get(`${route}${id}`);
    if (status < 300) {
      dispatch(SET_USER_DETAIL(data.data));
      return data;
    }
  } catch (err) {
    console.log(err);
    return null;
  }
  return null;
};

export const auth = (key, input, fn = () => {}, fail = () => {}, opt) => async (dispatch) => {
  try {
    const route = typeof key === 'string' ? Routes.post[key] : key.join();
    const { data, status } = await api.post(route, input, opt);
    if (status < 300) {
      fn(data);
      setToken(data.jwt);
      dispatch(SET_TOKEN(data));
      return data;
    }
  } catch (err) {
    fail(err);
    return null;
  }
  return null;
};
