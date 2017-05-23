import './sidebar.scss';

import  React, { Component } from 'react';
import  moment from 'moment';
import { Conversation } from '../conversation/conversation';
import { UserSearchItem } from '../user-search-item/user-search-item';
import { API_CONFIG } from '../../api-config';

export class Sidebar extends Component {
    constructor (props) {
        super(props);
        this.state = {
            searchedUsers: []
        };
    }

    componentWillMount() {
        this.toggler = this.state.sidebar;
    }

    componentDidMount() {
        this.props.getConversations(this.props.userData.user._id);
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
        this.clearUserSearch();
    }
    
    onCreateClick(usersIds) {
        this.props.createChat(this.props.userData.user._id, usersIds);
    }

    handleUserSearch() {
        fetch(`${API_CONFIG.BASE}/users`)
        .then((res) => res.json())
        .then(data => { 
            this.setState({searchedUsers: data});
        })
    }

    clearUserSearch() {
        this.setState({searchedUsers: []});
    }

    handleUserSearch(e) {
        fetch(`${API_CONFIG.BASE}/users`)
        .then((res) => res.json())
        .then(data => { 
            const tempArr = data.filter(user => {
                const regex = new RegExp(this.searchInput.value, 'gi');
                if(user.username.match(regex)) {
                    return user;
                }
            });
            this.setState({searchedUsers: tempArr})
        })
    }

    onConversationClick(conversation) {
        this.props.selectConversation(conversation._id);
    }

    render() {
        const searchUsersArr = this.state.searchedUsers
        .map( (user, index) => {
            return (
                <UserSearchItem
                clearSearch={this.clearUserSearch.bind(this)}
                key={user._id}
                data={user}
                createConversation={this.onCreateClick.bind(this)}
                />
            );
        })

        const loader = (
                <div className="chat-body spiner-wrap">
                    <div className="spinner">
                        <div className="bounce1"></div>
                        <div className="bounce2"></div>
                        <div className="bounce3"></div>
                    </div>
                </div>
        );
        
         const conversationsArr = this.props.conversations.sort((current, next) => {
             if (current.lastMsg.date >= next.lastMsg.date) {
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
                         onChange={this.handleUserSearch.bind(this)}
                         ref={(input) => { this.searchInput = input; }}
                        />
                        <button className="search-icon"></button>
                    </form>
                    <button id="menu-toggler" onClick={this.onCreateClick.bind(this)} className="menu-icon"></button>
                </nav>
                <ul className="user-menu scrollable">
                    { searchUsersArr }
                    { conversationsArr }
                </ul>
            </aside>    
        );
    }
} 

