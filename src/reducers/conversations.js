export const initialState = [];

export default function conversations (state = initialState, action) {
     switch (action.type) {
        case 'RECEIVE_CONVERSATIONS':
            return action.conversations;
        case 'SET_ONLINE_USER':
            const updatedConv = state.map( conv => {
                return {
                    _id: conv._id,
                    users: conv.users.map( user => {
                        if (user._id === action.userId) {
                            return {
                                _id: user._id,
                                username: user.username,
                                online: true
                            }
                        } else {
                            return user;
                        }
                    }),
                    lastMsg: conv.lastMsg
                }
            });
            return updatedConv;
        case 'SET_OFFLINE_USER':
            const updatedConvOff = state.map( conv => {
                return {
                    _id: conv._id,
                    users: conv.users.map( user => {
                        if (user._id === action.userId) {
                            return {
                                _id: user._id,
                                username: user.username,
                                online: false
                            }
                        } else {
                            return user;
                        }
                    }),
                    lastMsg: conv.lastMsg
                }
            });
            return updatedConvOff;
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
