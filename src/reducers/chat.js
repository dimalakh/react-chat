export const initialState =
    {
        "chat": []
    }

export default function chat (state = initialState, action) {
     switch (action.type) {
        case 'SEND_MESSAGE': 
            return [...state, action.msg];
        case 'RECEIVE_NEW_MESSAGE':
            return [...state, action.message];    
        case 'RECEIVE_MESSAGES': 
            return  action.messages;
        default:
            return state;
     } 
}

export function messagesIsLoading (state = false, action) {
    switch (action.type) {
        case 'MESSAGES_IS_LOADING':
            return action.isLoading;
        default:
            return state;
    }
}
