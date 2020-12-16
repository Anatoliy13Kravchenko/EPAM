import * as React from 'react';
import EpisodeInterface from 'Type/EpisodeInterface';
import {ListItem} from '@material-ui/core';
import ListItemText from '@material-ui/core/ListItemText';
import {Link} from "react-router-dom";

interface Props {
    episode: EpisodeInterface;
}

const EpisodePreview: React.FC<Props> = ({episode: {number, id, name, image, season, summary, runtime}}) => {
    return (
        <Link to={`/show/season/${season}/episode/${number}`}>
            <ListItem button={true}>
                <ListItemText primary={name}/>
            </ListItem>
        </Link>
    );
};

export default EpisodePreview;
