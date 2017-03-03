import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {Router, browserHistory} from 'react-router';
import Routes from './routes';
import ReduxPromise from 'redux-promise';

import reducers from './reducers'

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);


ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)} >
        <Router routes={Routes} history={browserHistory} />
    </Provider>
    , document.querySelector('.container'));
