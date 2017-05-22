import { API_CONFIG } from '../api-config.js';

function logInSuccess (data) {
    return {
        type: 'LOG_IN_SUCCESS',
        data
    };
}

export function auth (type, name, password, history) {
    return dispatch => {
        const myHeaders = new Headers();

        myHeaders.set('Content-Type', 'application/json');
        const myInit = {
            method: 'post',
            headers: myHeaders,
            mode: 'cors',
            body: JSON.stringify({
                username: name,
                password
            })
        };

        switch (type) {
            case 'signup':
                fetch(`${API_CONFIG.BASE}/auth/signup`, myInit)
                .then(() => history.push('/auth/login'));
            case 'login':
                fetch(`${API_CONFIG.BASE}/auth/login`, myInit)
                .then(res => res.json())
                .then(res => {
                    localStorage.setItem('data', JSON.stringify(res));
                    dispatch(logInSuccess(res));
                })
                .then(() => history.push('/chat'));
            default:
                fetch(`${API_CONFIG.BASE}/auth/signup`, myInit)
                .then(() => history.push('/auth/login'));
        }
    };
}
