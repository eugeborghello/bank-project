import { combineReducers } from 'redux';
import reducer from './registerReducer.js';
import user from './User.js';


const rootReducer = combineReducers({
    reducer,
    user
});

export default rootReducer;