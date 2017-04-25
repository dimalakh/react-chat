import fetch from 'isomorphic-fetch';

export const sendMessage = (message) => {
    return {
        type: 'SEND_MESSAGE',
        msg: message
    }
}

export const receiveNewMessage = (message) => {
    return {
        type: 'RECEIVE_NEW_MESSAGE',
        message
    }
}

function messagesIsLoading (bool) {
    return {
        type: 'MESSAGES_IS_LOADING',
        isLoading: bool
    }
}

function receiveMessages (messages) {
    return {
        type: 'RECEIVE_MESSAGES',
        messages
    }
}

export function fetchMessages (fromDate) {
    return (dispatch) => {
        dispatch(messagesIsLoading(true));
        fetch(`http://eleksfrontendcamp-mockapitron.rhcloud.com/messages?from=${fromDate}`)
        .then((res) => {
                dispatch(messagesIsLoading(false));
                return res;
            }
        )
        .then((res) => res.json())
        .then((data) => {
            dispatch(receiveMessages(data));
        });
    }    
}