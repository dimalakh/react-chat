import './sidebar.scss';

import  React, { Component } from 'react';

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

    onConversationClick(conversation) {
        console.log(conversation._id);
    }

    render() {
        console.log(this.props.conversations);
        const conversationsArr = this.props.conversations.map((conversation, index) => {
            return (
                 <li key={index} onClick={this.onConversationClick.bind(this, conversation)}>
                    <div className="user-photo">
                        <div className="message-indicator">1</div>
                    </div>
                    <div className="user-name">{conversation._id}</div>
                    <div className="short-message">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                    <time>52 m</time>
                </li>   
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
                    <button id="menu-toggler" className="menu-icon"></button>
                </nav>
                <ul className="user-menu scrollable">
                    {conversationsArr}
                </ul>
            </aside>    
        );
    }
} 