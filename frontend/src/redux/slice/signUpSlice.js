import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const signupSlice = createSlice({
  name: 'signup',
  initialState: {
    loading: false,
    error: null,
    userCreated: false
  },
  reducers: {
    signupRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    signupSuccess: (state,action) => {
      state.loading = false;
      state.error = null;
      state.userCreated = true;
      toast.success(action.payload.message)
    },
    signupFail: (state, action) => {
      state.loading = false;
      state.userCreated = false;
      state.error = action.payload;
      toast.error(state.error)
    },
  },
});

export const { signupRequest, signupSuccess, signupFail } = signupSlice.actions;
export default signupSlice.reducer;