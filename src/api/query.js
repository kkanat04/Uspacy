import Axios from "axios";
import { DOMAIN, PREFIX_COMPANY, Routes } from "./api";

export const api = Axios.create({
  baseURL: DOMAIN + PREFIX_COMPANY,
  headers: {
    "Content-Type": "application/json",
  },
});
export const setToken = (token) => {
  api.defaults.headers.common.Authorization = token;
};
export const Get = async (key, fn = () => {}, fail = () => {
}) => {
  try {
    const route = typeof key === "string" ? Routes.get[key] : key.join();
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

export const Post = async (key, input, fn = () => {}, fail = () => {}, opt) => {
  try {
    const route = typeof key === "string" ? Routes.post[key] : key.join();
    const { data, status } = await api.post(route, input, opt);
    if (status < 300) {
      fn(data);
      return data;
    }

  } catch (err) {
    fail(err);
    return null;
  }
};
