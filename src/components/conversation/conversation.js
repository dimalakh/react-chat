//import './sidebar.scss';

import  React, { Component } from 'react';
import  moment from 'moment';

export class Conversation extends Component {
    constructor (props) {
        super(props);
        this.state = {};
        this.isOnline = this.checkOnline();
    }

    componentWillReceiveProps() {
        this.isOnline = this.checkOnline();
        this.setState({users: this.props.data.users});
    }

    activateConversation() {
        this.props.conversationClick(this.props.data);
    }

    checkOnline() {
            let online = false;
            this.props.data.users.forEach( user => {
                if ( user.username !== JSON.parse(localStorage.getItem('data')).user.username) {
                    if ( user.online ) {
                        online = user.online;
                    }
                }
            });
            return online;
    }

    render() {
        const timeStamp = moment(this.props.data.lastMsg.date).format("HH:mm");
        const isActive = this.props.activeConversation === this.props.data._id ? 'is-active' : '';
        const conversationName = this.props.data.users.map((user) => {
            if ( user.username !== JSON.parse(localStorage.getItem('data')).user.username) {
                return  user.username;
            }
        });
        
        return (
            <li className={isActive} onClick={this.activateConversation.bind(this)}>
                <div className="user-photo">
                    { 
                        this.isOnline ?
                        <div className="message-indicator"></div> :
                         null
                     }
                </div>
                <div className="user-name">{conversationName}</div>
                <div className="short-message">{this.props.data.lastMsg.msg}</div>
                <time>{timeStamp}</time>
            </li>   
        );
    };    
}
