import { combineReducers } from 'redux';
import { imageReducer } from './image.reducer';


//Here we can add multiple reducers
export const rootReducer = combineReducers ({
    imageReducer
});