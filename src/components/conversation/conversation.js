//import './sidebar.scss';

import  React, { Component } from 'react';
import  moment from 'moment';
import emoji from 'react-easy-emoji';

export class Conversation extends Component {
    constructor (props) {
        super(props);
        this.state = {};
        this.isOnline = this.checkOnline(this.props.data.users);
    }

    componentWillReceiveProps(nextProps) {
        this.isOnline = this.checkOnline(nextProps.data.users);
        this.setState({data:this.isOnline});
    }

    activateConversation() {
        this.props.conversationClick(this.props.data);
    }

    checkOnline(members) {
            let online = false;
            members.forEach( user => {
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
        let imgUrl;
        const conversationName = this.props.data.users.map((user) => {
            if ( user.username !== JSON.parse(localStorage.getItem('data')).user.username) {
                imgUrl = user.image;
                return  user.username;
            }
        });
        const imageStyle = {
            backgroundImage: 'url(' + imgUrl + ')',
        };
        
        return (
            <li className={isActive} onClick={this.activateConversation.bind(this)}>
                <div className="user-photo" style={imageStyle}>
                    { 
                        this.isOnline ?
                        <div className="message-indicator"></div> :
                         null
                     }
                </div>
                <div className="user-name">{conversationName}</div>
                <div className="short-message">{emoji(this.props.data.lastMsg.msg)}</div>
                <time>{timeStamp}</time>
            </li>   
        );
    };    
}
