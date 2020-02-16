import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

import { persistStore } from "redux-persist";

//array of expected middlewares
const middlewares = [logger];

//creates a store and spread all the middlewares in the array as individual arguments
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);
