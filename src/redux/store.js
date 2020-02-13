import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

//array of expected middlewares
const middlewares = [logger];

//creates a store and spread all the middlewares in the array as individual arguments
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
