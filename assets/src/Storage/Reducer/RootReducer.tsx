import {combineReducers} from 'redux';
import show from './ShowReducer';
import {connectRouter} from 'connected-react-router'

const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    ...show
});

export type RootState = ReturnType<ReturnType<typeof createRootReducer>>

export default createRootReducer
