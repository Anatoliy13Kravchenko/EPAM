import { put, call, takeLatest, all } from 'redux-saga/effects';

const URL = 'http://api.tvmaze.com/singlesearch/shows?q=the-powerpuff-girls&embed=episodes';

const fetchShows = async () => await fetch(URL).then((response) => {
    return response.json();
});

export function* updateShow() {
    const show = yield call(fetchShows);
    const { name, summary, image, _embedded, genres, officialSite } = show;
    yield put({
        type: 'UPDATE_SHOW',
        show: { name, summary, genres, officialSite, image: image.medium, episodes: _embedded.episodes, },
    });
}

export function* watchShowsFetching() {
    yield takeLatest('FETCH_SHOW', updateShow);
}

export default function* rootSaga() {
    yield all([
        watchShowsFetching()
    ]);
}
