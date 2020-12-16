import * as React from 'react';
import ShowPreviewList from 'View/Section/Show/ShowPreviewList';
import Show from 'View/Section/Show/Show';
import Episode from 'View/Section/Show/Episode/Episode';

export interface RouteInterface {
    path: string;
    alias: string;
    component: React.ReactNode;
}

const Routes = [
    {
        path: '/',
        alias: 'home',
        component: <ShowPreviewList/>,
    },
    {
        path: '/show/girls',
        alias: 'show',
        component: <Show/>,
    },
    {
        path: '/show/season/:season/episode/:number',
        alias: 'episode',
        component: <Episode/>,
    }
];

export default Routes;
