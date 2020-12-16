import {combineReducers} from 'redux';
import show from './ShowReducer';
import {connectRouter} from 'connected-react-router';
import episode from 'Storage/Reducer/EpisodeReducer';

const createRootReducer = history => combineReducers({
    router: connectRouter(history),
    ...show,
    episode,
});

export type RootState = ReturnType<ReturnType<typeof createRootReducer>>;

export default createRootReducer;
