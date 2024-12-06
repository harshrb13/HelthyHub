import axios from 'axios'
import { exeFailed, exeRequest, exeSuccess } from '../slice/exercisesSlice'


export const exercises = (pageNo)=>async (dispatch) => {
    dispatch(exeRequest())
    try {
        const { data } = await axios.get("https://exercisedb.p.rapidapi.com/exercises", {
            headers: {
                'X-RapidAPI-Key': 'b35e054628msh29e6f1bd3626ecbp1369a5jsnb26accc1230a',
                'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            },
            params:{limit:'12',offset: pageNo}
        })
        dispatch(exeSuccess(data))
    } catch (error) {
       dispatch(exeFailed(error.response?.data?.message || 'request failed'))
    }
} 
