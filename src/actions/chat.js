import { API_CONFIG } from '../api-config.js';
import fetch from 'isomorphic-fetch';

function messagesIsLoading (bool) {
    return {
        type: 'MESSAGES_IS_LOADING',
        isLoading: bool
    };
}

function conversationsIsLoading (bool) {
    return {
        type: 'CONVERSATIONS_IS_LOADING',
        isLoading: bool
    };
}

function receiveMessages (messages) {
    return {
        type: 'RECEIVE_MESSAGES',
        messages
    };
}

function receiveConverstions (conversations) {
    return {
        type: 'RECEIVE_CONVERSATIONS',
        conversations
    };
}

export function sendMessage (message) {
    return {
        type: 'SEND_MESSAGE',
        msg: message
    };
}

export function receiveNewMessage (message) {
    return {
        type: 'RECEIVE_NEW_MESSAGE',
        message
    };
}

export function loadUserData (userData) {
    return {
        type: 'LOAD_USER_DATA',
        userData
    };
}

export function setActiveConversation (conversationId) {
    return {
        type: 'SET_ACTIVE_CONVERSATION',
        conversationId
    };
}

export function setOnlineUser (userId) {
    return {
        type: 'SET_ONLINE_USER',
        userId
    };
}

export function setOfflineUser (userId) {
    return {
        type: 'SET_OFFLINE_USER',
        userId
    };
}

export function conversationUpdate (msg) {
    return {
        type: 'CONVERSATION_UPDATE',
        msg
    };
}

export function loadAllUsers (users) {
    return {
        type: 'LOAD_ALL_USERS',
        users
    };
}

//  loads userData from localStorage
export function loadLocalStorage () {
    return dispatch => {
        const localData = JSON.parse(localStorage.getItem('data'));
        dispatch(loadUserData(localData));
    };
}

export function fetchMessages (conversationId) {
    return dispatch => {
        dispatch(messagesIsLoading(true));
        fetch(`${API_CONFIG.BASE}/chat/conversation/${conversationId}`)
        .then(res => {
            dispatch(messagesIsLoading(false));
            return res;
        })
        .then(res => res.json())
        .then(data => {
            dispatch(receiveMessages(data));
        });
    };
}

export function fetchConversations (userId) {
    return dispatch => {
        dispatch(conversationsIsLoading(true));
        fetch(`${API_CONFIG.BASE}/chat/${userId}`)
        .then(res => res.json())
        .then(data => {
            dispatch(conversationsIsLoading(false));
            dispatch(receiveConverstions(data));
        });
    };
}

export function createConversation (creatorId, usersIdArr) {
    return dispatch => {
        let myHeaders = new Headers();
        myHeaders.set('Content-Type', 'application/json');
        let myInit = {
            method: 'post',
            headers: myHeaders,
            mode: 'cors',
            body: JSON.stringify({
                usersIds: usersIdArr
            })
        };
        fetch(`${API_CONFIG.BASE}/chat/conversation`, myInit)
        .then(() => {
            dispatch(fetchConversations(creatorId));
        });
    };
}

export function fetchUsers () {
    return (
        fetch(`${API_CONFIG.BASE}/users`)
            .then(res => res.json())
    );
}
