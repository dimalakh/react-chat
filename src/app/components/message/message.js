import './message.scss';

import  React, { Component } from 'react';

export class Message extends Component {
    render() {
        return (
            <li>
                <div className="user-photo"></div>
                <div className="chat-message">
                    <p>Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur</p>
                    <time className="message-time">13:58</time>
                </div>
            </li>
        );
    }
}