import React from 'react';
import {Route, IndexRoute} from 'react-router';
import RootContent from './components/rootContent';
import Search from './containers/search';

import App from './components/app';

export default (
    <Route path="/" component={App}>
        <Route path="/search" component={Search} />
    </Route>
)