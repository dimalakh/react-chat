import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import chat, {messagesIsLoading} from './chat';

export default combineReducers({
    router: routerReducer,
    chat,
    messagesIsLoading
});