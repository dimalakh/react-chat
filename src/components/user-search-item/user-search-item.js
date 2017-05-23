import './user-search-item.scss';

import  React, { Component } from 'react';

export class UserSearchItem extends Component {
    constructor (props) {
        super(props);
    }

    createConversation () {
        const usersIds = [
            JSON.parse(localStorage.getItem('data')).user._id,
            this.props.data._id
        ]
        this.props.createConversation(usersIds);
        this.props.clearSearch();
    }

    render() {
        const imageStyle = {
            backgroundImage: 'url(' + this.props.data.image + ')',
        };

        return (
             <li className="user-search-item" onClick={this.createConversation.bind(this)}>
                <div className="user-photo" style={imageStyle}>
                        { 
                            this.props.data.online ?
                            <div className="message-indicator"></div> :
                            null
                        }
                </div>
                <div className="user-name">{this.props.data.username}</div>    
                <div className="user-add">+</div>
            </li>   
        );
    }
}