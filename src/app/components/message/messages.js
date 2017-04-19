import './messages.scss';

import  React, { Component } from 'react';
import moment from 'moment';

export class Messages extends Component {
    constructor (props) {
        super(props);
    }

    componentDidUpdate() {
        this.handleBottomScroll();
    }

    handleBottomScroll() {
        let scrollWrapper = document.querySelector('.chat-body');
        scrollWrapper.scrollTop += scrollWrapper.scrollHeight;
    }

    render() {
        const messagesArr = this.props.messages.map((message, index) => {
            //if message is from receiver add class is-answer
            let messageType = '';
            if(message.user.username != JSON.parse(localStorage.getItem('data')).user.username) {
                messageType = 'is-answer';
            }

            return (
                <li key={index} className={messageType}>
                    <div className="user-photo"></div>
                    <div className="chat-message">
                        <p>{message.user.username}</p>
                        <time className="message-time">{moment(message.time).format('LT')}</time>
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