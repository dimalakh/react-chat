import './sidebar.scss';

import  React, { Component } from 'react';

export class Sidebar extends Component {
    render() {
        return (
            <aside className="main-frame">
                <nav className="sidebar-nav">
                    <button id="aside-toggler" className="sidebar-toggle"></button>
                    <form>
                        <input type="search" />
                        <button className="search-icon"></button>
                    </form>
                    <button id="menu-toggler" className="menu-icon"></button>
                </nav>
                <ul className="user-menu">
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
                </ul>
            </aside>    
        );
    }
} 