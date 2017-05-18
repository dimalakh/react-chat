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

    render() {
        console.log(this.props.conversations);
        const conversationsArr = this.props.conversations.map((conversation, index) => {
            return (
                 <li key={index}>
                    <div className="user-photo">
                        <div className="message-indicator">1</div>
                    </div>
                    <div className="user-name">{conversation._id}</div>
                    <div className="short-message">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                    <time>52 m</time>
                </li>   
            );
        });
        if(this.props.loader) {

        } else {
            this.props.conversations.map((el, mess) => {
                return el;
            });
        }

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
                    <li>
                        <div className="user-photo">
                            <div className="message-indicator">1</div>
                        </div>
                        <div className="user-name">John Faustino</div>
                        <div className="short-message">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                        <time>52 m</time>
                    </li>
                    <li className="is-active">
                        <div className="user-photo"></div>
                        <div className="user-name">Cassia Tofano</div>
                        <div className="short-message">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                        <time>now</time>
                    </li>
                    <li>
                        <div className="user-photo">
                            <div className="message-indicator">1</div>
                        </div>
                        <div className="user-name">John Faustino</div>
                        <div className="short-message">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                        <time>52 m</time>
                    </li>
                    <li>
                        <div className="user-photo">
                            <div className="message-indicator">1</div>
                        </div>
                        <div className="user-name">John Faustino</div>
                        <div className="short-message">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                        <time>52 m</time>
                    </li>
                    <li>
                        <div className="user-photo">
                            <div className="message-indicator">1</div>
                        </div>
                        <div className="user-name">John Faustino</div>
                        <div className="short-message">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                        <time>52 m</time>
                    </li>
                </ul>
            </aside>    
        );
    }
} 