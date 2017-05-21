import './sidebar.scss';

import  React, { Component } from 'react';
import  moment from 'moment';
import { Conversation } from '../conversation/conversation';
import { API_CONFIG } from '../../api-config';

export class Sidebar extends Component {
    constructor (props) {
        super(props);
        this.state = {
            data: []
        };
        this.searchedUsers = [];
    }

    componentWillMount() {
        this.toggler = this.state.sidebar;
    }

    hendlerToggleSidebar() {
        if (this.toggler == 'toggled') {
            this.toggler = '';
            this.setState({
                sidebar: ''
            });
        } else {
            this.toggler = 'toggled';
            this.setState({
                sidebar: 'toggled'
            });
        }
    }

    



    onCreateClick() {
        console.log('test');
        const usersIds = [1,2,3];
        //this.props.createChat(usersIds);
    }

    handleUserSearch() {
        fetch(`${API_CONFIG.BASE}/users`)
        .then((res) => res.json())
        .then(data => { 
            this.state = { data };
            console.log(this.state);
        })
        
    }

    clearUserSearch() {
        //this.searchedUsers = [];
    }

    onConversationClick(conversation) {
        this.props.selectConversation(conversation._id);
    }

    render() {
        const searchUsersArr = this.state.data.map( (user, index) => {
            return (
                <li key={user._id}>
                    <div className="user-photo">
                        { 
                            user.online ?
                            <div className="message-indicator"></div> :
                            null
                        }
                    </div>
                    <div className="user-name">{user.username}</div>
                    
                    <time>+</time>
                </li>   
            );
        })

        const conversationsArr = this.props.conversations.sort((current, next) => {
            if (current.lastMsg.date > next.lastMsg.date) {
                return -1;
            } else {
                return 1;
            }
        })
        .map((conversation, index) => {
            return (
                 <Conversation 
                  key={index}
                  conversationClick={this.onConversationClick.bind(this)}
                  activeConversation={this.props.activeConversation}
                  data={conversation} />  
            );
        });

        
        
        return (
            <aside className={this.toggler}>
                <nav className="sidebar-nav">
                    <button onClick={this.hendlerToggleSidebar.bind(this)} className="sidebar-toggle"></button>
                    <form>
                        <input type="search"
                         onFocus={this.handleUserSearch.bind(this)}
                          />
                        <button className="search-icon"></button>
                    </form>
                    <button id="menu-toggler" onClick={this.onCreateClick.bind(this)} className="menu-icon"></button>
                </nav>
                <ul className="user-menu scrollable">
                    {conversationsArr}
                    {searchUsersArr}
                </ul>
            </aside>    
        );
    }
} 