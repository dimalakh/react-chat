//import './sidebar.scss';

import  React, { Component } from 'react';
import  moment from 'moment';

export class Conversation extends Component {
    constructor (props) {
        super(props);
    }

    activateConversation() {
        this.props.conversationClick(this.props.data);
    }

    render() {
        const timeStamp = moment(this.props.data.lastMsg.date).format("HH:mm");
        const conversationName = this.props.data.users.map((username) => {
            if ( username !== JSON.parse(localStorage.getItem('data')).user.username) {
                return  username;
            }
        });

        return (
            <li onClick={this.activateConversation.bind(this)}>
                <div className="user-photo">
                     <div className="message-indicator">1</div>
                </div>
                <div className="user-name">{conversationName}</div>
                <div className="short-message">{this.props.data.lastMsg.msg}</div>
                <time>{timeStamp}</time>
            </li>   
        );
    };    
}
