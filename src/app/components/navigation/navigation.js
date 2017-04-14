import  React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './navigation.scss';

export class Navigation extends Component {
    render() {
        return (
            <nav>
                <Link to="/">Home</Link>
                <Link to="/auth">Log in/Sign up</Link>
                <Link to="/chat">Chat</Link>
            </nav>
        );
    }
} 