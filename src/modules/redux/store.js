import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import authSlice from './slices/authSlice';
import usersListSlice from './slices/usersListSlice';

export const store = configureStore({
  reducer: {
    authSlice,
    usersListSlice,
  },
  middleware: [thunk],
});
