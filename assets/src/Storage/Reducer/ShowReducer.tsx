import EpisodeInterface from 'Type/EpisodeInterface';

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

export default {
    show(state = showState, { type, show }: ActionInterface): ShowStateInterface {

        switch (type) {

            case 'GET_SHOW':
                return state;
                break;

            case 'UPDATE_SHOW':
                return {
                    ...show,
                };
                break;

            case 'FETCH_SHOW':
                return {
                    ...show,
                };
                break;

            default:
                return state;
                break;
        }
    },
};
