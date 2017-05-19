import { API_CONFIG } from '../api-config.js';
import fetch from 'isomorphic-fetch';

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

export function setActiveConversation (conversationId) {
    return {
        type: 'SET_ACTIVE_CONVERSATION',
        conversationId
    }
}

export function fetchMessages (conversationId) {
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

export function fetchConversations (userId) {
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

export function createConversation (userId) {
    console.log(userId);
    return (dispatch) => {
        let myHeaders = new Headers();
        myHeaders.set('Content-Type', 'application/json');
        let myInit = {
            method: 'post',
            headers: myHeaders,
            mode: 'cors',
            body: JSON.stringify({
                'membersIds': ['591eea0a8cb1435d957163a9', '591eea348cb1435d957163aa']
            })
        }
        fetch(`${API_CONFIG.BASE}/chat/conversation`, myInit)
        .then(console.log('ok'));
    };
} 
