import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SET_TOKEN } from '../modules/redux/slices/authSlice';

const storage = new Storage({
  size: 1000,
  storageBackend: AsyncStorage,
  defaultExpires: 0,
  enableCache: true,
  sync: {},
});

export const setItem = (data) => {
  data = JSON.stringify(data);
  storage.save({
    key: 'setToken',
    data,
    expires: 1000 * 3600,
  });
};

export const getItem = () => (dispatch) => {
  storage.load({
    key: 'setToken',
    autoSync: true,
    syncInBackground: true,
    syncParams: {
      extraFetchOptions: {
      },
      someFlag: true,
    },
  })
    .then((res) => {
      res = JSON.parse(res);
      dispatch(SET_TOKEN(res));
    })
    .catch((err) => {
      console.log(err);
    });
};

export const removeItem = () => (dispatch) => {
  storage.remove({
    key: 'setToken',
  });
  dispatch(SET_TOKEN({}));
};
