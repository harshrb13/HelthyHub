import { createSlice } from "@reduxjs/toolkit";

const exercisesSlice = createSlice({
    name:'exItem',
    initialState:{
        loading:false,
        items:[],
        error:null
    },
    reducers:{
        exeRequest:(state)=>{
            state.loading = true
        },
        exeSuccess:(state,action)=>{
            state.loading = false
            state.items = action.payload
        },
        exeFailed:(state,action)=>{
            state.loading = false
            state.error = action.payload
        }
    }
})

export const {exeFailed,exeRequest,exeSuccess}  = exercisesSlice.actions
export default exercisesSlice.reducer

