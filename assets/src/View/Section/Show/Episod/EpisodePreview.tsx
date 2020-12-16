import * as React from "react";
import EpisodeInterface from "Type/EpisodeInterface";
import {ListItem} from "@material-ui/core";
import * as index from "index";
import {ListChildComponentProps} from 'react-window';
import ListItemText from "@material-ui/core/ListItemText";

interface Props {
    episode: EpisodeInterface;
}

const EpisodePreview: React.FC<Props> = ({episode: {number, id, name, image, season, summary, runtime},}) => {
    return (
        <ListItem button>
            <ListItemText primary={name} />
        </ListItem>
    )
}

export default EpisodePreview
