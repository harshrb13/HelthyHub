import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    loading: false,
    message: null
  },
  reducers: {
    forgotRequest: (state) => {
      state.loading = true;
    },
    forgotSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message
      toast.success(action.payload.message)
    },
    forgotFail: (state, action) => {
      state.loading = false;
      state.message = action.payload
      toast.error(action.payload)
    },
    resetRequest: (state) => {
      state.loading = true;
    },
    resetSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message
      toast.success(action.payload.message)
    },
    resetFail: (state, action) => {
      state.loading = false;
      state.message = action.payload
      toast.error(action.payload)
    },
    updateRequest:(state)=>{
      state.loading = true;
    },
    updateSuccess:(state,action)=>{
      state.loading = false;
      state.message = action.payload.message;
    },
    updateFailed:(state,action)=>{
      state.loading = false;
      state.message = action.payload
    }
  }
})

export const { forgotFail, forgotRequest, forgotSuccess,resetRequest,resetSuccess,resetFail,updateFailed,updateRequest,updateSuccess } = profileSlice.actions
export default profileSlice.reducer