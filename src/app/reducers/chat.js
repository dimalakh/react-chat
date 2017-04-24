export const initialState =
    {
        "chat": []
    }

export default function chat (state = initialState, action) {
     switch (action.type) {
        case 'SEND_MESSAGE': 
             return [...state, action.payload];
        case 'RECEIVE_NEW_MESSAGE':
             return [...state, action.payload];    
        case 'RECEIVE_MESSAGES': 
            return  action.data;
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
