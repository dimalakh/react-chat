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

export function receiveNewConversation (conversation) {
    return {
        type: 'RECEIVE_NEW_CONVERSATION',
        conversation
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
        .then(res => res.json())
        .then(data => {
            console.log(data);
            dispatch(receiveNewConversation(data));
        });
    };
}

export function fetchUsers () {
    return (
        fetch(`${API_CONFIG.BASE}/users`)
            .then(res => res.json())
    );
}

export function uploadUserImg (file, userId) {
    return (dispatch) => {
        let reader  = new FileReader();
        reader.onloadend = function () {
            let form = new FormData();

            form.append('image',  reader.result.split(',')[1]);
            let myHeaders = new Headers();
            myHeaders.set('authorization', 'Client-ID 588ffba43d732db');
            let myInit = {
                async: true,
                crossDomain: true,
                method: 'post',
                headers: myHeaders,
                processData: false,
                contentType: false,
                mimeType: 'multipart/form-data',
                body: form
            };
            fetch('https://api.imgur.com/3/upload', myInit)
            .then(res => res.json())
            .then(data => {
                const img = data.data.link;
                dispatch(setUserImg(img, userId));
            });
        };

        if (file)
            reader.readAsDataURL(file);
    };
}

export function setUserImg (img, userId) {
    return () => {
        let myHeaders = new Headers();
        myHeaders.set('Content-Type', 'application/json');
        let myInit = {
            method: 'put',
            headers: myHeaders,
            mode: 'cors',
            body: JSON.stringify({
                userId,
                imgUrl: img
            })
        };
        fetch(`${API_CONFIG.BASE}/users/image`, myInit)
        .then(res => res.json())
        .then(data => {
            console.log(data);
        });
    };
}
