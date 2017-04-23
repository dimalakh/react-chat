import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/index';
import thunkMiddleware from 'redux-thunk';
import createHistory from 'history/createBrowserHistory'


export const history = createHistory();

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));


