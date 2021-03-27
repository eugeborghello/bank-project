import { createStore, applyMiddleware } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./Reducers/index.js";
import { AppActions } from "./ActionModels/index";

//const middleware = [thunk]

export type AppState = ReturnType<typeof rootReducer>;

const store = createStore<AppState, AppActions, {}, {}>(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>)),
);

export default store;
