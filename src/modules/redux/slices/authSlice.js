import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: {},
};

const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    SET_TOKEN(state, action) {
      state.token = action.payload;
    },
  },
});

export const { SET_TOKEN } = authSlice.actions;
export default authSlice.reducer;
