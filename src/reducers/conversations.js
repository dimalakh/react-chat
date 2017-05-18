export const initialState = [];

export default function conversations (state = initialState, action) {
     switch (action.type) {
        case 'RECEIVE_CONVERSATIONS':
            return action.conversations;
        default:
            return state;
     } 
}

export function conversationsIsLoading (state = false, action) {
    switch (action.type) {
        case 'CONVERSATIONS_IS_LOADING':
            return action.isLoading;
        default:
            return state;
    }
}