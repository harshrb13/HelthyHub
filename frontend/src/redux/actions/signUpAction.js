import axios from 'axios'
import {
    signupFail,
    signupRequest,
    signupSuccess
} from '../slice/signUpSlice'
import { server } from '../store'

export const signUp = (formData) => async (dispatch) => {
    try {
        
        dispatch(signupRequest()); // Dispatch the signUp request action
        const { data } = await axios.post(`${server}/signup`, formData , {
            headers: {
                "Content-Type": "multipart/form-data"
            },
            withCredentials: true
        });

        dispatch(signupSuccess(data)); // Dispatch the signUp success action with user data
    } catch (error) {
        dispatch(signupFail(error.response?.data?.message || 'Sign Up failed')); // Dispatch the signUp fail action with error message
    }
};