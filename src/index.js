import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HashRouter } from 'react-router-dom';
import App from './App';
import { unregister } from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './ducks/store';

ReactDOM.render(
    <Provider store = { store }>
    <HashRouter>
        <App />
    </HashRouter>
    </Provider>
    , document.getElementById('root'));
unregister();
