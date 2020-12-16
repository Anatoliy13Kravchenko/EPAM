import { call, put, takeLatest } from 'redux-saga/effects';
import EpisodeEnum from 'Constant/EpisodeEnum';

const fetchEpisode = async (season, number) => {
    const URL = `http://api.tvmaze.com/shows/6771/episodebynumber?season=${season}&number=${number}`;

    return await fetch(URL).then((response) => {
        return response.json();
    });
};

function* updateEpisode(action) {
    try {
        console.log(action)
        const episode = yield call(() => fetchEpisode(action.season, action.number));
        const { name, summary, image, runtime } = episode;
        console.log(episode)
        yield put({
            type: EpisodeEnum.UPDATE_EPISODE,
            episode: { name, summary, runtime, image: image?.medium, },
        });
    } catch (e) {
        alert(e);
    }
}

export default function* watchEpisodeFetching() {
    yield takeLatest('FETCH_EPISODE' as any, updateEpisode);
}
