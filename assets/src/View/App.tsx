import * as React from 'react';
import Container from '@material-ui/core/Container';
import Header from "View/Layout/Header";
import Footer from "View/Layout/Footer";
import {Route} from 'react-router';
import Routes, {RouteInterface} from "../Routing/Routes";
import addIndex from 'ramda/es/addIndex';
import map from 'ramda/es/map';
import { useDispatch } from 'react-redux';

const App = () => {
    const dispatch = useDispatch();
    dispatch({type: 'FETCH_SHOW'});

    return (
        <Container maxWidth={'lg'} className='flex col'>
            <Header/>
            {
                addIndex<RouteInterface, React.ReactElement>(map)(({path, component}, index) => {
                    return (
                        <Route exact={true} path={path} key={index}>
                            {component}
                        </Route>
                    )
                }, Routes)
            }
            <Footer/>
        </Container>
    );
}

export default App;
