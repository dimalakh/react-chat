import './home.scss';

import  React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Home extends Component {
    render() {
        return (
            <div className='home-wrapper'>
                <div className='home'>
                    <h1>Welcome to chat</h1>
                    <span className="home-text">
                        You can <Link to="/auth">log in</Link> or <Link to="/auth">sign up</Link>.
                    </span>
                </div>
            </div>
        );
    }
} 