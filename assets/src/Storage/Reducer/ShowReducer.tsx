import EpisodeInterface from 'Type/EpisodeInterface';
import {Reducer} from "react";
import pipe from "ramda/es/pipe";
import identity from "ramda/es/identity";
import cond from "ramda/es/cond";
import equals from "ramda/es/equals";
import T from "ramda/es/T";
import always from "ramda/es/always";
import ShowEnum from "Constant/ShowEnum";

export interface ShowStateInterface {
    name: string;
    image: string;
    summary: string;
    genres: string[];
    officialSite: string;
    episodes: EpisodeInterface[];
}

const showState: ShowStateInterface = {
    name: '',
    image: '',
    summary: '',
    genres: [],
    officialSite: '',
    episodes: [],
};

interface ActionInterface {
    type: string;
    show: ShowStateInterface;
}

/**
 * @param prevState
 * @param type
 * @param show
 */
const show: Reducer<ShowStateInterface, ActionInterface> = (prevState = showState, {type, show}): ShowStateInterface => pipe(
    identity,
    cond([
        [equals(ShowEnum.GET_SHOW), () => ({...prevState})],
        [equals(ShowEnum.FETCH_SHOW), () => ({...show})],
        [equals(ShowEnum.UPDATE_SHOW), () => ({...show})],
        [T, always(prevState)]
    ])
)(type);

export default show
