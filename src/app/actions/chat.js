export const sendMessage = (message) => {
    return {
        type: 'SEND_MESSAGE',
        payload: {
            msg: message
        }
    }
}

/*export const getMessages = () => {
    return {
        type: 'GET_MESSAGES',
        payload: {
            messages
        }
    }
}*/