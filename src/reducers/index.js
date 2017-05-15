import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import chat, {messagesIsLoading} from './chat';
import conversations from './conversations';

export default combineReducers({
    router: routerReducer,
    chat,
    conversations,
    messagesIsLoading
});