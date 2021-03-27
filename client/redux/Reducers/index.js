import { combineReducers } from 'redux';
import reducer from './registerReducer';
import loginUserReducer from './loginReducer';
import accountsReducer from './accountsReducer';


const rootReducer = combineReducers({
    reducer,
    loginUserReducer,
    accountsReducer
});

export default rootReducer;