import './auth.scss';

import  React, { Component } from 'react';

export class Auth extends Component{
    constructor (props) {
        super(props);
    }
    

    componentDidMount() {
        this.props.onLogIn();
        this.isLoggedIn();
    }

    signup(e) {
        e.preventDefault();
        let name = document.querySelector('#auth-name'),
            password = document.querySelector('#auth-password');
        
        this.props.onSignUp('signup', name.value, password.value)
        //this.auth('signup', name.value, password.value);    
    }

    login(e) {
        e.preventDefault();
        let name = document.querySelector('#login-name'),
            password = document.querySelector('#login-password');
        
        this.props.onLogIn('login', name.value, password.value, this.props.history)
        //this.auth('login', name.value, password.value);    
    }

    isLoggedIn() {
        if(JSON.parse(localStorage.getItem('data'))){
            this.props.history.push('chat');
        }
    }

    toggleAuth() {
        document.querySelector('#signup').classList.toggle('hidden');
        document.querySelector('#login').classList.toggle('hidden');
    }

    render() {
        return (
            <div className="auth-wrapper">
                <div className="auth-form" id="login">
                    <h1>Log in</h1>
                    <span>or <a onClick={this.toggleAuth.bind(this)}>Sign up</a></span> 
                    <label htmlFor="login-name">name:</label> 
                    <input id="login-name" type="text" required /> 
                    <label htmlFor="login-password">password:</label> 
                    <input id="login-password" type="password" required /> 
                    <button onClick={this.login.bind(this)}>submit</button>   
                </div>
                <div className="auth-form hidden" id="signup">
                    <h1>Sign up</h1>
                    <span>or <a onClick={this.toggleAuth.bind(this)}>Log in</a></span> 
                    <label htmlFor="auth-name">name:</label> 
                    <input id="auth-name" type="text" required /> 
                    <label htmlFor="auth-email">email:</label> 
                    <input id="auth-email" type="email" /> 
                    <label htmlFor="auth-password">password:</label> 
                    <input id="auth-password" type="password" required /> 
                    <button onClick={this.signup.bind(this)}>submit</button>   
                </div>
            </div>
        );
    }
} 