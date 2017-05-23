import './home.scss';

import  React, { Component } from 'react';
import { Link } from 'react-router-dom';


    
export class Home extends Component {
    constructor (props) {
        super(props);
    }

    componentDidMount() {
        this.isLoggedIn();
    }
    
    isLoggedIn() {
        if(JSON.parse(localStorage.getItem('data'))){
            this.props.history.push('chat');
        }
    }
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