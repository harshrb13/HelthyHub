// rootReducer.js
import { combineReducers } from 'redux';
import authReducer from '../slice/authSlice';
import signupReducer from '../slice/signUpSlice';
import profileReducer from '../slice/profileSlice';
import exercisesReducer from "../slice/exercisesSlice"

const rootReducer = combineReducers({
  auth: authReducer,
  signup: signupReducer,
  profile: profileReducer,
  exercise: exercisesReducer
});



export default rootReducer;
