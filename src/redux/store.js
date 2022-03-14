import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist"; // allows the browser to cache the store
import logger from "redux-logger"; // for debugging redux code
import rootReducer from "./root-reducer";

const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store); // persisted version of the store

// export default { store, persistor };
