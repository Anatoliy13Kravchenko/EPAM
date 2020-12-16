import * as React from 'react';
import EpisodeInterface from 'Type/EpisodeInterface';
import addIndex from 'ramda/es/addIndex';
import map from 'ramda/es/map';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { List, ListSubheader } from '@material-ui/core';
import pipe from 'ramda/es/pipe';
import prop from 'ramda/es/prop';
import range from 'ramda/es/range';
import last from 'ramda/es/last';
import filter from 'ramda/es/filter';
import equals from 'ramda/es/equals';
import inc from 'ramda/es/inc';
import EpisodePreview from 'View/Section/Show/Episode/EpisodePreview';

interface Props {
    episodes: EpisodeInterface[];
}

const useStyles = makeStyles((theme: Theme) => createStyles({
        root: {
            width: '100%',
            maxWidth: 360,
            backgroundColor: theme.palette.background.paper,
            position: 'relative',
            overflow: 'auto',
            maxHeight: 400,
        },
        listSection: {
            backgroundColor: 'inherit',
        },
        ul: {
            backgroundColor: 'inherit',
            padding: 0,
        },
    })
);

const EpisodePreviewList: React.FC<Props> = ({ episodes }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <List className={classes.root} subheader={<li/>}>
                {
                    pipe(
                        last,
                        prop('season'),
                        inc,
                        range(1),
                        addIndex(map)(
                            (sectionId) => (
                                <li key={`section-${sectionId}`} className={classes.listSection}>
                                    <ul className={classes.ul}>
                                        <ListSubheader>{`Season ${sectionId}`}</ListSubheader>
                                        {
                                            pipe(
                                                filter((episode: EpisodeInterface) => equals(sectionId, prop('season', episode))),
                                                map((episode) => (
                                                    <EpisodePreview episode={episode}/>
                                                ))
                                            )(episodes)
                                        }
                                    </ul>
                                </li>
                            )
                        )
                    )(episodes)
                }
            </List>
        </div>
    );
};

export default EpisodePreviewList;

