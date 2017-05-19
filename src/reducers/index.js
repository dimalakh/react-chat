import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import chat, {messagesIsLoading, activeConversation} from './chat';
import conversations, {conversationsIsLoading} from './conversations';

export default combineReducers({
    router: routerReducer,
    chat,
    activeConversation,
    conversations,
    messagesIsLoading,
    conversationsIsLoading
});