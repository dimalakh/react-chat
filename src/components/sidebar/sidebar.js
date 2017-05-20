import './sidebar.scss';

import  React, { Component } from 'react';
import  moment from 'moment';
import { Conversation } from '../conversation/conversation';

export class Sidebar extends Component {
    constructor (props) {
        super(props);
        this.state = {
            sidebar: ''
        };
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
        this.props.createChat(usersIds);
    }

    onConversationClick(conversation) {
        this.props.selectConversation(conversation._id);
    }

    render() {
        const conversationsArr = this.props.conversations.map((conversation, index) => {
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
                        <input type="search" />
                        <button className="search-icon"></button>
                    </form>
                    <button id="menu-toggler" onClick={this.onCreateClick.bind(this)} className="menu-icon"></button>
                </nav>
                <ul className="user-menu scrollable">
                    {conversationsArr}
                </ul>
            </aside>    
        );
    }
} 