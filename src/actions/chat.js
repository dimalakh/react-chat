import { API_CONFIG } from '../api-config.js';
import fetch from 'isomorphic-fetch';

function messagesIsLoading (bool) {
    return {
        type: 'MESSAGES_IS_LOADING',
        isLoading: bool
    }
}

function conversationsIsLoading (bool) {
    return {
        type: 'CONVERSATIONS_IS_LOADING',
        isLoading: bool
    }
}

function receiveMessages (messages) {
    return {
        type: 'RECEIVE_MESSAGES',
        messages
    }
}

function receiveConverstions (conversations) {
    return {
        type: 'RECEIVE_CONVERSATIONS',
        conversations
    }
}

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

export const loadUserData = (userData) => {
    return {
        type: 'LOAD_USER_DATA',
        userData
    }
}

export const setActiveConversation = (conversationId) => {
    return {
        type: 'SET_ACTIVE_CONVERSATION',
        conversationId
    }
}

export const setOnlineUser = (userId) => {
    return {
        type: 'SET_ONLINE_USER',
        userId
    }
}

export const setOfflineUser = (userId) => {
    return {
        type: 'SET_OFFLINE_USER',
        userId
    }
}

export const loadAllUsers = (users) => {
    return {
        type: 'LOAD_ALL_USERS',
        users
    }
}

// export const setUserStatus = (userId) => {
//     return (dispatch) => {

//     }
// }

//loads userData from localStorage
export const loadLocalStorage = () => {
    return (dispatch) => {
       const localData = JSON.parse(localStorage.getItem('data'));
       dispatch(loadUserData(localData));
    }
}

export const fetchMessages = (conversationId) => {
    return (dispatch) => {
        dispatch(messagesIsLoading(true));
        fetch(`${API_CONFIG.BASE}/chat/conversation/${conversationId}`)
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

export const fetchConversations = (userId) => {
    return (dispatch) => {
        dispatch(conversationsIsLoading(true));
        fetch(`${API_CONFIG.BASE}/chat/${userId}`)
        .then( res => {
            return res;
        })
        .then((res) => res.json())
        .then( data => {
            dispatch(conversationsIsLoading(false));
            dispatch(receiveConverstions(data));
        });
    }
}

export const createConversation = (usersIdArr) => {
    return (dispatch) => {
        console.log(usersIdArr);
        let myHeaders = new Headers();
        myHeaders.set('Content-Type', 'application/json');
        let myInit = {
            method: 'post',
            headers: myHeaders,
            mode: 'cors',
            body: JSON.stringify({
                usersIds: usersIdArr
            })
        }
        fetch(`${API_CONFIG.BASE}/chat/conversation`, myInit)
        .then(console.log('ok'));
    };
} 

export const fetchUsers = () => {
    return (
        fetch(`${API_CONFIG.BASE}/users`)
        .then((res) => res.json())
        .then(data => { 
          return data;  //dispatch(loadAllUsers(data));
        })
    )
}

