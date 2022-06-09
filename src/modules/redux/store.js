import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import authSlice from './slices/authSlice';

export const store = configureStore({
  reducer: {
    authSlice,
  },
  middleware: [thunk],
});
