import './toolbar.scss';

import  React, { Component } from 'react';

export class Toolbar extends Component {
    render() {
        return (
            <nav className="toolbar">
                <button id="conversation-menu" className="message-icon"></button>
                <button id="general-menu" className="user-icon"></button>
            </nav>
        );
    }
}