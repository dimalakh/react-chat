import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import chat, {messagesIsLoading, activeConversation, userData} from './chat';
import conversations, {conversationsIsLoading} from './conversations';

export default combineReducers({
    router: routerReducer,
    chat,
    userData,
    activeConversation,
    conversations,
    messagesIsLoading,
    conversationsIsLoading
});