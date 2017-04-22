import './messages.scss';

import  React, { Component } from 'react';
import moment from 'moment';

export class Messages extends Component {
    constructor (props) {
        super(props);
    }

    componentDidUpdate() {
        this.handleBottomScroll();


       const sorted = this.props.messages.filter((message) => {
            return typeof(message.msg) != 'object';
        });

        console.log(sorted);
    }

    handleBottomScroll() {
        let scrollWrapper = document.querySelector('.chat-body');
        scrollWrapper.scrollTop += scrollWrapper.scrollHeight;
    }

    render() {
        const messagesArr = this.props.messages
            .filter((message) => {
                return typeof(message.msg) != 'object';
            })
            .map((message, index) => {
                //if message is from receiver add class is-answer
                let messageType = '';
                if(message.user.username != JSON.parse(localStorage.getItem('data')).user.username) {
                    messageType = 'is-answer';
                }

                return (
                    <li key={index} className={messageType}>
                        <div className="user-photo"></div>
                        <div className="chat-message">
                            <p>{message.user.username}: {message.msg}</p>
                            <time className="message-time">{moment(message.time).format('LT')}</time>
                        </div>
                    </li>
                );
            });

        return (
            <ul className="chat-body scrollable">
                {messagesArr}
            </ul>
        );
    }
}