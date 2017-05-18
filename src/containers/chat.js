import { connect } from 'react-redux';

import { Chat } from '../components/chat/chat';
import { sendMessage, receiveNewMessage, fetchMessages, fetchConversations } from '../actions/chat';

const mapStateToProps = (state) => {
    return {
        messageStore: state.chat,
        conversationStore: state.conversations,
        isLoading: state.messagesIsLoading,
        conversationsIsLoading: state.conversationsIsLoading
    }
}

const mapDispatchToProps = (dispatch) => ({
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
    }
});

const ChatContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat);

export default ChatContainer;
