import React from 'react'
import ReactDOM from 'react-dom';
import App from './components/App'
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import reducers from './reducers';
import ReduxPromise from 'redux-promise'

const createFromMiddleWare=applyMiddleware(ReduxPromise)(createStore);



ReactDOM.render(
    <Provider store={createFromMiddleWare(reducers)}>
        <App/>
    </Provider>,
    document.querySelector('.container'));