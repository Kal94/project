import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

const middlewares = [];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const store = configureStore({rootReducer}, applyMiddleware(...middlewares));

export const persistor = persistStore(store);
