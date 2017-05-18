import './message-form.scss';

import  React, { Component } from 'react';

export class MessageForm extends Component {
    constructor (props) {
        super(props);
    }

    handleSubmit(e) {
        e.preventDefault();
        const messageInput = document.querySelector('#message-box');
        this.props.send(messageInput.innerHTML);
        messageInput.innerHTML = '';
    }

    render() {
        return (
            <form className="chat-message-form">
                <div className="inner">
                    <div id="message-box" className="message-text" contentEditable="true">
                    </div>
                    <button className='send-button' onClick={this.handleSubmit.bind(this)}>send</button>
                </div>
            </form>
        );
    }
}