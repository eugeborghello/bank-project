import { combineReducers } from 'redux';
import reducer from './registerReducer.js';
import user from './User.js';
import accountsReducer from './accountsReducer';


const rootReducer = combineReducers({
    reducer,
    user,
    accountsReducer
});

export default rootReducer;