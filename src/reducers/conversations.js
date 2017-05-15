export const initialState =
    {
        "conversations": []
    }

export default function conversations (state = initialState, action) {
     switch (action.type) {
        case 'RECEIVE_CONVERSATIONS':
            return  action.conversations;
        default:
            return state;
     } 
}