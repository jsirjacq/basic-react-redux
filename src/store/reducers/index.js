import {combineReducers} from 'redux';
import postReducer from './postReducer'
import imageReducer from "./imageReducer";

export default combineReducers({
    posts: postReducer,
    image: imageReducer
});