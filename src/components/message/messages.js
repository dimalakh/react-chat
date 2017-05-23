import './messages.scss';

import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
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
        const messagesArr = this.props.messages
            .filter((message) => {
                return typeof(message.msg) != 'object';
            })
            .map((message, index) => {
                //if message is from receiver add class is-answer
                let messageType = '';
                if(message.sender.username !== JSON.parse(localStorage.getItem('data')).user.username) {
                     messageType = 'is-answer';
                 }

                return (      
                    <li key={index} className={messageType}>
                        <div className="user-photo"></div>
                        <div className="chat-message">
                           <p>{/*{message.sender.username}:*/} {message.msg}</p>
                           <time className="message-time">{moment(message.date).format('HH:mm')}</time>
                        </div>
                    </li>
                );
            });

        if(this.props.loader) {
            return (
                <div className="chat-body spiner-wrap">
                    <div className="spinner">
                        <div className="bounce1"></div>
                        <div className="bounce2"></div>
                        <div className="bounce3"></div>
                    </div>
                </div>
            )
        } else {
            return (
                <ul className="chat-body scrollable">
                    {messagesArr}
                </ul>
            );
        }
    }
}