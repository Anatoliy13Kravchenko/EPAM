import {applyMiddleware, compose, createStore} from 'redux';
import createRootReducer from "Storage/Reducer/RootReducer";
import createSagaMiddleware from 'redux-saga';
import rootSaga from './Saga/RootSaga';
import {createBrowserHistory} from 'history'
import {routerMiddleware} from 'connected-react-router'

export const history = createBrowserHistory()
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    createRootReducer(history), compose(applyMiddleware(routerMiddleware(history), sagaMiddleware)));

sagaMiddleware.run(rootSaga);

export default store;

