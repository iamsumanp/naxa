import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware, combineReducers } from "redux";
import fetchServices from "./reducers/reducer";
import { logger } from "redux-logger";
import rootSaga from "./sagas/sagas";

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({ fetchServices });

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger));
sagaMiddleware.run(rootSaga);
export default store;
