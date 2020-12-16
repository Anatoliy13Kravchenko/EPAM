import * as React from 'react';
import Container from '@material-ui/core/Container';
import Header from "View/Layout/Header";
import Footer from "View/Layout/Footer";
import {Route} from 'react-router';
import Routes, {RouteInterface} from "../Routing/Routes";
import addIndex from 'ramda/es/addIndex';
import map from 'ramda/es/map';
import {useDispatch} from 'react-redux';
import {makeStyles} from "@material-ui/core/styles";
import {useEffect} from "react";

const useStyles = makeStyles({
    container: {
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column'
    },
    content: {
        flex: 1
    }
})

/**
 * Root component
 * const App
 * @constructor
 */
const App = () => {
    const dispatch = useDispatch(),
        classes = useStyles();

    useEffect(() => {
        dispatch({type: 'FETCH_SHOW'});
    }, []);

    return (
        <Container maxWidth={'lg'} className={classes.container}>
            <Header/>
            <div className={classes.content}>
                {
                    addIndex<RouteInterface, React.ReactElement>(map)(({path, component}, index) => {
                        return (
                            <Route exact={true} path={path} key={index}>
                                {component}
                            </Route>
                        )
                    }, Routes)
                }
            </div>
            <Footer/>
        </Container>
    );
}

export default App;
