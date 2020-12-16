import * as React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';
import LinkM from '@material-ui/core/Link';
import { ShowStateInterface } from 'Storage/Reducer/ShowReducer';
import { RootState } from 'Storage/Reducer/RootReducer';
import Rating from '@material-ui/lab/Rating';

const useStyles = makeStyles((theme: Theme) => createStyles({
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
    })
);

interface Props {
    show: ShowStateInterface;
}

const ShowPreview: React.FC<Props> = ({ show: { name, summary, image, genres, officialSite } }: RootState) => {
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
                                dangerouslySetInnerHTML={{ __html: summary }}>
                    </Typography>
                    <div className="text-left text-info margin-top-15">Genres: {genres && genres.join(',')}</div>
                    <div className={'margin-top-15'}><Rating name="read-only" value={4} readOnly={true}/></div>
                    <div className={'margin-top-15'}>
                    <LinkM
                        className={'margin-top-15'}
                        component="button"
                        variant="body2"
                        onClick={() => {
                        }}
                    >
                        {officialSite}
                    </LinkM></div>
                </CardContent>
            </Box>
            <CardActions>
                <Button className={classes.button} size="large" color="primary">
                    <Link to={{
                        pathname: '/show/girls',
                    }}>
                        Watch
                    </Link>
                </Button>
            </CardActions>
        </Card>
    );
};

export default ShowPreview;
