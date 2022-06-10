import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: {},
  userDetail: [],
};

const usersListSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    SET_USERS(state, action) {
      state.users = action.payload;
    },
    SET_USER_DETAIL(state, action) {
      state.userDetail = [action.payload];
    },
  },
});

export const { SET_USERS, SET_USER_DETAIL } = usersListSlice.actions;
export default usersListSlice.reducer;
