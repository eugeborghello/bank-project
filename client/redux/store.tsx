import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension' 
import rootReducer from './Reducers/index.js'


const middleware = [thunk]

const store = createStore(rootReducer, composeWithDevTools 
(applyMiddleware(...middleware)))

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