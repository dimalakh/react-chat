import  React, { Component } from 'react';

export class SignUp extends Component{
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
            <form className="auth-form hidden" id="signup">
                <h1>Sign up</h1>
                <span>or <a onClick={this.props.toggler}>Log in</a></span> 
                <label htmlFor="auth-name">name:</label> 
                <input onChange={this.validation} id="auth-name" type="text" required /> 
                <label htmlFor="auth-email">email:</label> 
                <input id="auth-email" type="email" /> 
                <label htmlFor="auth-password">password:</label> 
                <input onChange={this.validation} id="auth-password" type="password" required /> 
                <button onClick={this.props.submition}>submit</button>   
            </form>
        );
    }
} 