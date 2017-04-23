import './toolbar.scss';

import  React, { Component } from 'react';

export class Toolbar extends Component {
    constructor (props) {
        super(props);
    }

    handleShowMessagesFrom (e) {
        this.props.showFromDate(e.target.dataset.lasthistory);
        document.querySelector('#myDropdown').classList.toggle('show');
    }

    handleDisplayDropdown () {
        document.querySelector('#myDropdown').classList.toggle('show');
    }

    render() {
        return (
            <nav className="toolbar">
                <button onClick={this.handleDisplayDropdown} className="message-icon"></button>
                <div id="myDropdown" className="dropdown-content">
                    <a data-lastHistory="-2" onClick={this.handleShowMessagesFrom.bind(this)}>Show messages for last 2 days</a>
                    <a data-lastHistory="-3" onClick={this.handleShowMessagesFrom.bind(this)}>Show messages for last 5 days</a>
                    <a data-lastHistory="-7" onClick={this.handleShowMessagesFrom.bind(this)}>Show messages for last 7 days</a>
                </div>
                <button id="general-menu" className="user-icon"></button>
            </nav>
        );
    }
}