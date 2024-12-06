import {
    forgotSuccess,
    forgotRequest,
    forgotFail,
    resetRequest,
    resetFail,
    resetSuccess,
    updateFailed,
    updateRequest,
    updateSuccess
}from '../slice/profileSlice'
import axios from 'axios'
import { server } from "../store"

export const updateProfile = (name,email)=>async(dispatch)=>{
    try {
        dispatch(updateRequest());
        const { data } = await axios.post(`${server}/forgot`, { name , email },{
            headers:{
                "Content-Type":"application/json"
            },
            withCredentials:true
        });
        dispatch(updateSuccess());
    } catch (error) {
        dispatch(updateFailed(error.response?.data?.message || 'update failed'));
    }
}

export const forgot =(email)=> async(dispatch)=>{
    try {
        dispatch(forgotRequest()); // Dispatch the forgot request action

        const { data } = await axios.post(`${server}/forgot`, { email },{
            headers:{
                "Content-Type":"application/json"
            },
            withCredentials:true
        });

        dispatch(forgotSuccess(data)); // Dispatch the forgot success action with user data
    } catch (error) {
        dispatch(forgotFail(error.response?.data?.message || 'Forgot failed')); // Dispatch the forgot fail action with error message
    }
}


export const reset =(password,confirmPassword,token)=> async(dispatch)=>{
    try {
        dispatch(resetRequest()); // Dispatch the reset request action

        const { data } = await axios.patch(`${server}/reset/${token}`, { password,confirmPassword },{
            headers:{
                "Content-Type":"application/json"
            },
            withCredentials:true
        });

        dispatch(resetSuccess(data)); // Dispatch the reset success action with user data
    } catch (error) {
        dispatch(resetFail(error.response?.data?.message || 'reset failed')); // Dispatch the reset fail action with error message
    }
}