// authActions.js
import {
    loginRequest,
    loginSuccess,
    loginFail,
    logoutFail,
    logoutRequest,
    logoutSuccess,
    userRequest,
    userSuccess,
    userFail
} from '../slice/authSlice';
import axios from 'axios';
import { server } from "../store"

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch(loginRequest()); // Dispatch the login request action

        const { data } = await axios.post(`${server}/login`, { email, password },{
            headers:{
                "Content-Type":"application/json"
            },
            withCredentials:true
        });

        dispatch(loginSuccess(data)); // Dispatch the login success action with user data
    } catch (error) {
        dispatch(loginFail(error.response?.data?.message || 'Login failed')); // Dispatch the login fail action with error message
    }
};

export const logout = ( ) => async (dispatch) => {
    try {
        dispatch(logoutRequest()); // Dispatch the login request action

        const { data } = await axios.get(`${server}/logout`, {
            headers:{
                "Content-Type":"application/json"
            },
            withCredentials:true
        });

        dispatch(logoutSuccess(data)); // Dispatch the login success action with user data
    } catch (error) {
        dispatch(logoutFail(error.response?.data?.message || 'Logout failed')); // Dispatch the login fail action with error message
    }
};

export const userProfile = () => async (dispatch) => {
    try {
        dispatch(userRequest()); // Dispatch the login request action

        const { data } = await axios.get(`${server}/me`,{
            headers:{
                "Content-Type":"application/json"
            },
            withCredentials:true
        });

        dispatch(userSuccess(data)); // Dispatch the login success action with user data
    } catch (error) {
        if (!error.response) {
            throw new Error(error)
        }
        dispatch(userFail(error.response?.data?.message || 'user not found')); // Dispatch the login fail action with error message

    }
};


