import  React, { Component } from 'react';

export class LogIn extends Component{
    constructor(props) {
        super(props);
    }

    validation(e) {
        const input = e.target;
        const regexp = /^[A-Za-z0-9]{3,}$/;
        
        if(!regexp.test(input.value)) {
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    }

    render() {
        return (
            <form className="auth-form" id="login">
                <h1>Log in</h1>
                <span>or <a onClick={this.props.toggler}>Sign up</a></span> 
                <label htmlFor="login-name">name:</label> 
                <input onChange={this.validation} id="login-name" type="text" required /> 
                <label htmlFor="login-password">password:</label> 
                <input onChange={this.validation} id="login-password" type="password" required /> 
                <button onClick={this.props.submition}>submit</button>   
            </form>
        );
    }
} 