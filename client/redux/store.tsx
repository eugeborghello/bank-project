import { createStore, applyMiddleware } from 'redux'
import thunk, {ThunkMiddleware} from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension' 
import rootReducer from './Reducers/index.js'
import { AppActions } from './ActionModels/index.js';

//const middleware = [thunk]

export type AppState = ReturnType<typeof rootReducer>

const store = createStore<AppState, AppActions, {}, {}>(
    rootReducer, 
    composeWithDevTools 
    (applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>)))

export default store;


/*
useSelector is analogous to connect’s mapStateToProps. You pass it a 
function that takes the Redux store state and returns the pieces of 
state you’re interested in.

useDispatch replaces connect’s mapDispatchToProps but is lighter weight. 
All it does is return your store’s dispatch method so you can manually 
dispatch actions. I like this change, as binding action creators can be a
 little confusing to newcomers to React Redux.
 */