import fetch from 'isomorphic-fetch'

export const sendMessage = (message) => {
    return {
        type: 'SEND_MESSAGE',
        payload: {
            msg: message
        }
    }
}

export const receiveNewMessage = (message) => {
    return {
        type: 'RECEIVE_NEW_MESSAGE',
        payload: message
    }
}

function receiveMessages (data) {
    return {
        type: 'RECEIVE_MESSAGES',
        payload: data
    }
}

export function fetchMessages(fromDate) {
    return (dispatch) => {
        return fetch(`http://eleksfrontendcamp-mockapitron.rhcloud.com/messages?from=${fromDate}`)
        .then((res) => res.json())
        .then(data => dispatch(receiveMessages(data)));
    }    
}