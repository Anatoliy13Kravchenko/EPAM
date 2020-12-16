import { call, put, takeLatest } from 'redux-saga/effects';
import ShowEnum from 'Constant/ShowEnum';

const fetchShows = async () => {
    const URL = 'http://api.tvmaze.com/singlesearch/shows?q=the-powerpuff-girls&embed=episodes';

    return await fetch(URL).then((response) => {
        return response.json();
    });
};

function* updateShow() {
    try {
        const show = yield call(fetchShows);
        const { name, summary, image, _embedded, genres, officialSite } = show;
        yield put({
            type: ShowEnum.UPDATE_SHOW,
            show: { name, summary, genres, officialSite, image: image.medium, episodes: _embedded.episodes, },
        });
    } catch (e) {
        alert(e);
    }
}

export default function* watchShowsFetching() {
    yield takeLatest(ShowEnum.FETCH_SHOW, updateShow);
}
