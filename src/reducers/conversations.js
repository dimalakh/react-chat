export const initialState = [];

export default function conversations (state = initialState, action) {
    switch (action.type) {
        case 'RECEIVE_CONVERSATIONS':
            return action.conversations;
        case 'RECEIVE_NEW_CONVERSATION':
            return [...state, action.conversation];
        case 'CONVERSATION_UPDATE':
            return state.map(conv => {
                if (conv._id === action.msg.conversationId)
                    return {
                        _id: conv._id,
                        users: conv.users,
                        lastMsg: action.msg
                    };
                return {
                    _id: conv._id,
                    users: conv.users,
                    lastMsg: conv.lastMsg
                };
            });
        case 'SET_ONLINE_USER':
            return state.map(conv => {
                return {
                    _id: conv._id,
                    users: conv.users.map(user => {
                        if (user._id === action.userId)
                            return {
                                _id: user._id,
                                username: user.username,
                                online: true
                            };
                        return user;
                    }),
                    lastMsg: conv.lastMsg
                };
            });
        case 'SET_OFFLINE_USER':
            return state.map(conv => {
                return {
                    _id: conv._id,
                    users: conv.users.map(user => {
                        if (user._id === action.userId)
                            return {
                                _id: user._id,
                                username: user.username,
                                online: false
                            };
                        return user;
                    }),
                    lastMsg: conv.lastMsg
                };
            });
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
