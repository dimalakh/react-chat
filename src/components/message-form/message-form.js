import './message-form.scss';

import  React, { Component } from 'react';
import emoji from 'react-easy-emoji';

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

    addEmoji(e) {
        if(e.target.tagName === 'IMG') {
            const messageInput = document.querySelector('#message-box');
            messageInput.innerHTML += e.target.alt;
        }
    }

    render() {
        const emojis = ['😏', '❤️', '😀', '😎', '😙', '😊', '😨', '😠', '😵', '😍'];
        const emojiBar = emojis.map( (el, index) => {
            return (
                <div key={index} onClick={this.addEmoji} className="emoji-el">{emoji(el)}</div>
            );
        });
        return (
            <form className="chat-message-form">
                <div className="inner">
                    <div className="emoji-bar">{emojiBar}</div>
                    <div id="message-box" className="message-text" contentEditable="true">
                    </div>
                    <button className='send-button' onClick={this.handleSubmit.bind(this)}>send</button>
                </div>
            </form>
        );
    }
}