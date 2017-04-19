import './message-form.scss';

import  React, { Component } from 'react';

export class MessageForm extends Component {
    constructor (props) {
        super(props);
    }

    handleSubmit(e) {
        e.preventDefault();
        let msg = document.querySelector('#message-box').innerHTML;
        this.props.send(msg);
    }

    render() {
        return (
            <form className="chat-message-form">
                <div className="inner">
                    <div id="message-box" className="message-text" contentEditable>
                    </div>
                    <button id="smiles-button" className="smile-icon"></button>
                    <input id="attach" className="file-icon" type="file" />
                    <label htmlFor="attach"></label>
                    <button onClick={this.handleSubmit.bind(this)}>send</button>
                </div>
            </form>
        );
    }
}