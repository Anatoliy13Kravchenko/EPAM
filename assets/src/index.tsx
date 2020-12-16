import * as React from 'react';
import {render} from 'react-dom';
import '../scss/index.scss';
import "fontsource-roboto";
import App from 'View/App';
import {Provider} from 'react-redux';
import store, {history} from "Storage/Store";
import {ConnectedRouter} from 'connected-react-router';

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App/>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);
