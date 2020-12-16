import * as React from 'react';
import CardMedia from '@material-ui/core/CardMedia';
import {makeStyles} from '@material-ui/core/styles';
import {connect, useDispatch} from 'react-redux';
import {RootState} from 'Storage/Reducer/RootReducer';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import EpisodeEnum from 'Constant/EpisodeEnum';
import {useParams} from 'react-router-dom';
import {useEffect} from "react";

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        padding: '15px',
    },
    contentBox: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    content: {
        flex: '2 0 300px',
    },
    playIcon: {
        height: 300,
        flex: '0 0 200px',
    },
    button: {
        width: '100%',
    },
});

interface Props {
}

const Episode: React.FC<Props> = connect(({episode}: RootState) => ({
    episode
}))(({episode: {name, summary, image, runtime}}) => {
    console.log(name)
    const classes = useStyles(),
        {season, number} = useParams<any>(),
        dispatch = useDispatch();

    useEffect(() => {
        dispatch({type: EpisodeEnum.FETCH_EPISODE, action: {season, number}});
    }, [season, number])

    return (
        <Card className={classes.root}>
            <Box className={classes.contentBox}>
                <CardMedia
                    className={classes.playIcon}
                    image={image}
                    title={name}
                />
                <CardContent className={classes.content}>
                    <Typography gutterBottom={true} variant="h5" component="h2">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p"
                                dangerouslySetInnerHTML={{__html: summary}}>
                    </Typography>
                    <div
                        className="text-left text-info margin-top-15">Runtime: {runtime}</div>
                    <div className={'margin-top-15'}><Rating name="read-only" value={4} readOnly={true}/></div>
                </CardContent>
            </Box>
        </Card>
    );
});

export default Episode;
