// authSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify'

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        isAuthenticated: false,
        loading: false,
        error: null,
    },
    reducers: {
        loginRequest: (state) => {
            state.loading = true;
            state.error = null;
        },
        loginSuccess: (state, action) => {
            state.loading = false;
            state.isAuthenticated = true;
            state.user = action.payload.user;
            state.error = null;
            toast.success("Login success")
        },
        loginFail: (state, action) => {
            state.loading = false;
            state.isAuthenticated = false;
            state.error = action.payload;
            toast.error(action.payload)
        },
        logoutRequest: (state) => {
            state.loading = true;
            state.error = null;
        },
        logoutSuccess: (state, action) => {
            state.loading = false;
            state.isAuthenticated = false;
            state.user = null;
            state.error = null;
            toast.success(action.payload.message)
        },
        logoutFail: (state, action) => {
            state.loading = false;
            state.isAuthenticated = false;
            state.error = action.payload;
        },
        userRequest: (state) => {
            state.loading = true;
            state.error = null;
        },
        userSuccess: (state, action) => {
            state.loading = false;
            state.isAuthenticated = true;
            state.user = action.payload.user;
            state.error = null;
        },
        userFail: (state, action) => {
            state.loading = false;
            state.isAuthenticated = false;
            state.error = action.payload;
        }
    },
});

export const { loginRequest,
    loginSuccess,
    loginFail,
    userRequest,
    userFail,
    userSuccess,
    logoutFail,
    logoutRequest,
    logoutSuccess
} = authSlice.actions;
export default authSlice.reducer;
