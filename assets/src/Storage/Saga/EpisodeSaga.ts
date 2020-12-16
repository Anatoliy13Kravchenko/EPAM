import {call, put, takeLatest} from 'redux-saga/effects';
import EpisodeEnum from 'Constant/EpisodeEnum';

const fetchEpisode = async ({number, season}) => {
    const URL = `http://api.tvmaze.com/shows/6771/episodebynumber?season=${season}&number=${number}`;

    return await fetch(URL).then((response) => {
        return response.json();
    });
};

/**
 * @param action
 */
function* updateEpisode({action}) {
    try {
        const episode = yield call(() => fetchEpisode(action));
        const {name, summary, image, runtime} = episode;

        yield put({
            type: EpisodeEnum.UPDATE_EPISODE,
            episode: {name, summary, runtime, image: image?.medium},
        });
    } catch (e) {
        alert(e);
    }
}

export default function* watchEpisodeFetching() {
    yield takeLatest(EpisodeEnum.FETCH_EPISODE as any, updateEpisode);
}
