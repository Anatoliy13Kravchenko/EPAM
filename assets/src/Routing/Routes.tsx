import * as React from "react";
import ShowPreviewList from "View/Section/Show/ShowPreviewList";
import Show from "View/Section/Show/Show";
import Episode from "View/Section/Show/Episod/Episode";

export interface RouteInterface {
    path: string,
    alias: string,
    component: React.ReactNode
}

const Routes = [
    {
        path: '/',
        alias: 'home',
        component: <ShowPreviewList/>
    },
    {
        path: '/show/girls',
        alias: 'show',
        component: <Show/>
    },
    {
        path: '/show/:show/episode/:episode',
        alias: 'episode',
        component: <Episode/>
    },
]

export default Routes
