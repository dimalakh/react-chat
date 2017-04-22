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