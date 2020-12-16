import EpisodePreview from "./EpisodePreview"
import * as React from "react";
import EpisodeInterface from "Type/EpisodeInterface";
import addIndex from "ramda/es/addIndex";
import map from "ramda/es/map";
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {FixedSizeList, ListChildComponentProps} from 'react-window';
import {List, ListSubheader} from "@material-ui/core";
import pipe from "ramda/es/pipe";
import prop from "ramda/es/prop";
import range from "ramda/es/range";
import last from "ramda/es/last";
import filter from "ramda/es/filter";
import equals from "ramda/es/equals";
import inc from "ramda/es/inc";

interface Props {
    episodes: EpisodeInterface[];
}

const useStyles = makeStyles((theme: Theme) => createStyles({
        // root: {
        //     width: '100%',
        //     height: 400,
        //     maxWidth: 300,
        //     backgroundColor: theme.palette.background.paper,
        // },
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
    }),
);

const EpisodePreviewList: React.FC<Props> = ({episodes}) => {
    const classes = useStyles();

    console.log(episodes);
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
                                                filter<any>((episode: EpisodeInterface) => equals(sectionId, prop('season', episode))),
                                                map(({name, number}) => (
                                                    <ListItem key={`item-${sectionId}-${number}`}>
                                                        <ListItemText primary={`${number} ${name}`}/>
                                                    </ListItem>
                                                ))
                                            )(episodes)
                                        }
                                    </ul>
                                </li>
                            )
                        )
                    )(episodes)

                    //     [0, 1, 2, 3, 4].map((sectionId) => (
                    //     <li key={`section-${sectionId}`} className={classes.listSection}>
                    //         <ul className={classes.ul}>
                    //             <ListSubheader>{`I'm sticky ${sectionId}`}</ListSubheader>
                    //             {[0, 1, 2].map((item) => (
                    //                 <ListItem key={`item-${sectionId}-${item}`}>
                    //                     <ListItemText primary={`Item ${item}`} />
                    //                 </ListItem>
                    //             ))}
                    //         </ul>
                    //     </li>
                    // ))
                }
            </List>
        </div>

    )
}

export default EpisodePreviewList

