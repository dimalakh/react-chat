import './messages.scss';

import  React, { Component } from 'react';

export class Messages extends Component {
    constructor (props) {
        super(props);
    }

    componentDidMount() {
        console.log(this.props.messages);
    }

    render() {
        const messagesArr = this.props.messages.map((message, index) => {
            return (
                <li key={index}>
                    <div className="user-photo"></div>
                    <div className="chat-message">
                        <p>{message.user.username}</p>
                        <time className="message-time">{message.time}</time>
                    </div>
                </li>
            );
        });

        return (
            <ul className="chat-body">
                {messagesArr}
            </ul>
        );
    }
}