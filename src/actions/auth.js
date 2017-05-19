import { API_CONFIG } from '../api-config.js';

const logInSuccess = (data) => {
    return {
        type: 'LOG_IN_SUCCESS',
        data
    }
}

const signUpSuccess = (data) => {
    return {
        type: 'SIGN_UP_SUCCESS',
        data
    }
}

export const auth = (type, name, password, history) => {
    return (dispatch) => {
        let myHeaders = new Headers();
        myHeaders.set('Content-Type', 'application/json');

        let myInit = {
            method: 'post',
            headers: myHeaders,
            mode: 'cors',
            body: JSON.stringify({'username': name, 'password': password})
        }

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
        }
    }
}