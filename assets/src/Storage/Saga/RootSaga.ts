import { all } from 'redux-saga/effects';
import watchShowsFetching from 'Storage/Saga/ShowSaga';
import watchEpisodeFetching from 'Storage/Saga/EpisodeSaga';

export default function* rootSaga() {
    yield all([
        watchShowsFetching(),
        watchEpisodeFetching()
    ]);
}
