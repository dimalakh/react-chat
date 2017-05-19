//import './sidebar.scss';

import  React, { Component } from 'react';
import  moment from 'moment';

export class Conversation extends Component {
    constructor (props) {
        super(props);
    }

    render() {
        const timeStamp = moment(this.props.data.lastMsg.date).fromNow();

        return (
            <li>
                <div className="user-photo">
                     <div className="message-indicator">1</div>
                </div>
                <div className="user-name">{this.props.data._id}</div>
                <div className="short-message">{this.props.data.lastMsg.msg}</div>
                <time>{timeStamp}</time>
            </li>   
        );
    };    
}
