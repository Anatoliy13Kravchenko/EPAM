import EpisodeInterface from 'Type/EpisodeInterface';
import { Reducer } from 'react';
import pipe from 'ramda/es/pipe';
import identity from 'ramda/es/identity';
import cond from 'ramda/es/cond';
import equals from 'ramda/es/equals';
import always from 'ramda/es/always';
import T from 'ramda/es/T';
import EpisodeEnum from 'Constant/EpisodeEnum';

export interface EpisodeStateInterface extends Partial<EpisodeInterface> {
}

const episodeState: EpisodeStateInterface = {
    name: '',
    image: '',
    summary: '',
    number: 0,
    runtime: 0,
};

interface ActionInterface {
    type: string;
    episode: EpisodeInterface;
}

const episode: Reducer<EpisodeStateInterface, ActionInterface> = (prevState = episodeState, { type, episode }): EpisodeStateInterface => pipe(
    identity,
    cond([
        [equals(EpisodeEnum.GET_EPISODE), () => ({ ...prevState })],
        [equals(EpisodeEnum.FETCH_EPISODE), () => ({ ...episode })],
        [equals(EpisodeEnum.UPDATE_EPISODE), () => ({ ...episode })],
        [T, always(prevState)]
    ])
)(type);

export default episode
