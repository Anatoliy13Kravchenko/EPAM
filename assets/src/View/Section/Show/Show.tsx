import * as React from 'react';
import CardMedia from '@material-ui/core/CardMedia';
import {makeStyles} from '@material-ui/core/styles';
import EpisodePreviewList from 'View/Section/Show/Episode/EpisodePreviewList';
import {connect} from 'react-redux';
import {RootState} from 'Storage/Reducer/RootReducer';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import LinkM from '@material-ui/core/Link';

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
        textAlign: 'left'

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

/**
 * @const Show
 */
const Show: React.FC<Props> = connect(({show}: RootState) => ({
    show,
}))(({show: {name, summary, image, episodes, genres, officialSite}}) => {
    const classes = useStyles();
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
                        className="text-left text-info margin-top-15">Genres: {genres && (genres as string[]).join(',')}</div>
                    <div className={'margin-top-15'}><Rating name="read-only" value={4} readOnly={true}/></div>
                    <div className='margin-top-15 '>
                        <LinkM
                            className={'text-left'}
                            component="button"
                            variant="body2"
                            onClick={() => {
                            }}
                        >
                            {officialSite}
                        </LinkM></div>
                </CardContent>
                <EpisodePreviewList episodes={episodes}/>
            </Box>
        </Card>
    );
});

export default Show;
