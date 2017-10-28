import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import reducer from './reducer';

export default createStore(reducer, undefined, applyMiddleware(promiseMiddleware()));
//undefined may not be there sometimes-- is initial store
//store is made aware of the reducer in the createStore function