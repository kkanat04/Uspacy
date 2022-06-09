import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {},
};

const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    SET_TOKEN(state, action) {
      state.user = action.payload;
    },
  },
});

export const { SET_TOKEN } = authSlice.actions;
export default authSlice.reducer;
