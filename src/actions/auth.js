export const logIn = (data) => {
    console.log('login');
    return {
        type: 'LOG_IN',
        data
    }
}

export const signUp = (data) => {
    console.log('auth');
    return {
        type: 'SIGN_UP',
        data
    }
}