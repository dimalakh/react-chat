import './message-form.scss';

import  React, { Component } from 'react';

export class MessageForm extends Component {
    render() {
        return (
            <form className="chat-message-form">
                <div className="inner">
                    <div id="message-box" className="message-text" contentEditable>
                    </div>
                    <button id="smiles-button" className="smile-icon"></button>
                    <input id="attach" className="file-icon" type="file" />
                    <label htmlFor="attach"></label>
                </div>
            </form>
        );
    }
}