import { connect } from 'react-redux';

import { Chat } from '../components/chat/chat';
import { sendMessage, receiveNewMessage, fetchMessages } from '../actions/chat';

const mapStateToProps = (state) => {
    return {
        messageStore: state.chat,
        isLoading: state.messagesIsLoading
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
    }
});

const ChatContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat);

export default ChatContainer;
