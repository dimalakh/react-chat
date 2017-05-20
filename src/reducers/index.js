import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import chat, {messagesIsLoading, activeConversation, userData, allUsers} from './chat';
import conversations, {conversationsIsLoading} from './conversations';

export default combineReducers({
    router: routerReducer,
    allUsers,
    chat,
    userData,
    activeConversation,
    conversations,
    messagesIsLoading,
    conversationsIsLoading
});