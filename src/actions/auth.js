const logInSuccess = (data) => {
    console.log('login');
    return {
        type: 'LOG_IN_SUCCESS',
        data
    }
}

const signUpSuccess = (data) => {
    console.log('login');
    return {
        type: 'SIGN_UP_SUCCESS',
        data
    }
}

export const auth = (type, name, password, user, history) => {
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
                fetch(`http://eleksfrontendcamp-mockapitron.rhcloud.com/${type}`, myInit)
                .then(console.log('ok'));
            case 'login':
                 fetch(`http://eleksfrontendcamp-mockapitron.rhcloud.com/${type}`, myInit)
                .then(res => res.json())
                .then(res => {
                    localStorage.setItem('data', JSON.stringify(res));
                    dispatch(logInSuccess(res));
                })
                .then(() => history.push('/chat'));
        }
    }
}