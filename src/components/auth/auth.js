import './auth.scss';

import  React, { Component } from 'react';
import { LogIn } from './login';
import { SignUp } from './signup';

export class Auth extends Component{
    constructor (props) {
        super(props);
    }
    
    componentDidMount() {
        this.isLoggedIn();
    }

    isLoggedIn() {
        if(JSON.parse(localStorage.getItem('data'))){
            this.props.history.push('chat');
            console.log('ola');
        }
    }

    signup(e) {
        e.preventDefault();
        let name = document.querySelector('#auth-name').value;
        let password = document.querySelector('#auth-password').value;
        
        this.props.onSignUp('signup', name, password);
    }

    login(e) {
        e.preventDefault();
        let name = document.querySelector('#login-name').value,
            password = document.querySelector('#login-password').value;

        this.props.onLogIn('login', name, password, this.props.history);
    }

    
    toggleAuth() {
        document.querySelector('#signup').classList.toggle('hidden');
        document.querySelector('#login').classList.toggle('hidden');
    }

    render() {
        return (
            <div className="auth-wrapper">
                <LogIn toggler={this.toggleAuth.bind(this)} submition={this.login.bind(this)}/>
                <SignUp toggler={this.toggleAuth.bind(this)} submition={this.signup.bind(this)}/>
            </div>
        );
    }
} 