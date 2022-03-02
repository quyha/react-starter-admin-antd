import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './auth/slice';
import profileReducer from './profile/slice';

const rootReducer = combineReducers({
    auth: authReducer,
    profile: profileReducer,
});

export default rootReducer;
