import { connect } from 'react-redux';

import { Chat } from '../components/chat/chat';
import { sendMessage, receiveNewMessage, setOnlineUser, fetchMessages, setActiveConversation, loadLocalStorage, fetchConversations, createConversation } from '../actions/chat';

const mapStateToProps = (state) => {
    return {
        userData: state.userData,
        activeConversation: state.activeConversation,
        messageStore: state.chat,
        conversationStore: state.conversations,
        isLoading: state.messagesIsLoading,
        conversationsIsLoading: state.conversationsIsLoading
    }
}

const mapDispatchToProps = (dispatch) => ({
    onLoadStorage: () => {
        dispatch(loadLocalStorage());
    },
    onSendMessage: (message) => {
        dispatch(sendMessage(message));
    },
    onReceiveNewMessage: (msg) => {
        dispatch(receiveNewMessage(msg));
    },
    onReceiveMessages: (fromDate) => {
        dispatch(fetchMessages(fromDate));
    },
    onReceiveConversations: (userId) => {
        dispatch(fetchConversations(userId));
    },
    onCreateCoversation: (userId) => {
        dispatch(createConversation(userId));
    },
    onSelectConversation: (conversationId) => {
        dispatch(setActiveConversation(conversationId));
    },
    onJoinUser: (userId) => {
        dispatch(setOnlineUser(userId));
    }
});

const ChatContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat);

export default ChatContainer;
