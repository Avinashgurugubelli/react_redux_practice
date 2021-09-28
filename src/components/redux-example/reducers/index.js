import counterReducer from "./counter-reducer";
import loggedInReducer from "./logged-in-reducer";

import { combineReducers } from 'redux'

const allReducers = combineReducers({
    counter: counterReducer,
    loggedIn: loggedInReducer
});

export default allReducers;
