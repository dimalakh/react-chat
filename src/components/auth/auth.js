import './auth.scss';

import  React, { Component } from 'react';

export class Auth extends Component{
    constructor (props) {
        super(props);
    }

    componentDidMount() {
        this.props.onLogIn();
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

    render() {
        return (
            <div className="auth-wrapper">
                <div className="auth-container"> 
                    <input id="register" className="hidden" type="radio" name="auth" /> 
                    <input id="login" className="hidden" defaultChecked type="radio" name="auth" /> 
                    <label htmlFor="register" className="auth-tumbler">Register</label> 
                    <label htmlFor="login" className="auth-tumbler">Log in</label> 
                    <form className="auth-form auth"> 
                        <h1>Registration</h1> 
                        <label htmlFor="auth-name">name:</label> 
                        <input id="auth-name" type="text" required /> 
                        <label htmlFor="auth-email">email:</label> 
                        <input id="auth-email" type="email" /> 
                        <label htmlFor="auth-password">password:</label> 
                        <input id="auth-password" type="password" required /> 
                        <label htmlFor="auth-confirm">password confirmation:</label> 
                        <input id="auth-confirm" type="password" /> 
                        <button onClick={this.signup.bind(this)}>Register</button> 
                    </form> 
                    <form className="auth-form login"> 
                        <h1>Log in</h1> 
                        <label htmlFor="login-name">name:</label> 
                        <input id="login-name" type="text" required /> 
                        <label htmlFor="login-password">password:</label> 
                        <input id="login-password" type="password" required /> 
                        <button onClick={this.login.bind(this)}>Log in</button> 
                    </form> 
                </div>
            </div>
        );
    }
} 