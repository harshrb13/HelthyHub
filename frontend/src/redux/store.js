import {configureStore} from '@reduxjs/toolkit'
import rootReducer from './reducers/rootReducers'


export const server = import.meta.env.VITE_API_URI

const store = configureStore({
    reducer:rootReducer,
})

export default store