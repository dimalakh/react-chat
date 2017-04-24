import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/index';
import { initialState } from './reducers/chat';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory'



export const history = createHistory();

export const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunk)));


