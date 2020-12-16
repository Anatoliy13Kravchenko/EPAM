import * as React from 'react';
import EpisodeInterface from 'Type/EpisodeInterface';
import {ListItem} from '@material-ui/core';
import ListItemText from '@material-ui/core/ListItemText';
import PlayListPlay from '@material-ui/icons/PlayListPlay';
import {Link} from 'react-router-dom';

/**
 * @interface Props
 */
interface Props {
    episode: EpisodeInterface;
}

/**
 * @param number
 * @param name
 * @param season
 * @param runtime
 * @constructor
 */
const EpisodePreview: React.FC<Props> = ({episode: {number, name, season, runtime}}) => {
    return (
        <Link to={`/show/season/${season}/episode/${number}`}>
            <ListItem button={true}>
                <ListItemText primary={`${number}. ${name}`} secondary={`${runtime} min`}/>
                <PlayListPlay/>
            </ListItem>
        </Link>
    );
};

export default EpisodePreview;
