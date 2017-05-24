import './toolbar.scss';

import  React, { Component } from 'react';

export class Toolbar extends Component {
    constructor (props) {
        super(props);
    }

    handleShowMessagesFrom (e) {
        this.props.showFromDate(this.props.activeConversation, e.target.dataset.lasthistory);
        document.querySelector('#settingsDropdown').classList.toggle('show');
    }

    handleDisplayDropdown () {
        document.querySelector('#settingsDropdown').classList.toggle('show');
    }

    handleUserMenuDropdown () {
        document.querySelector('#userMenuDropdown').classList.toggle('show');
    }

    logOut () {
        localStorage.removeItem('data');
        this.props.history.push('auth');
    }

    goToSettings() {
        document.querySelector('.user-settings').classList.toggle('show');
    }

    uploadImg(e) {
        let file = e.target.files[0];
        const userId = this.props.userData.user._id;
        this.props.uploadUserImg(file, userId);

        let reader = new FileReader();
        reader.onload = function (e) {
            document.querySelector("img").src = e.target.result;
        };

        reader.readAsDataURL(file);
    }
    
    render() {
        return (
            <nav className="toolbar">
                <button onClick={this.handleDisplayDropdown} className="message-icon"></button>
                <div id="settingsDropdown" className="dropdown-content">
                    <a data-lastHistory="-2" onClick={this.handleShowMessagesFrom.bind(this)}>Messages for last 2 days</a>
                    <a data-lastHistory="-7" onClick={this.handleShowMessagesFrom.bind(this)}>Messages for last week</a>
                    <a data-lastHistory="-30" onClick={this.handleShowMessagesFrom.bind(this)}>Messages for last month</a>
                </div>
                <button onClick={this.handleUserMenuDropdown} className="user-icon"></button>
                <div id="userMenuDropdown" className="dropdown-content">
                    <ul>
                        <li onClick={this.logOut.bind(this)}>Log out</li>
                        <li onClick={this.goToSettings.bind(this)}>Change user image</li>
                    </ul>
                </div>
                <div className="user-settings">
                    <img src="http://partss.net/wp-content/uploads/img/no_image-450x300.jpg" />
                    <div className="upload">
                        <span>Choose file</span>
                        <input type="file" name="img" accept="image/jpeg,image/png,image/gif" onChange={this.uploadImg.bind(this)}/>
                    </div>
                    <a href="http://localhost:9000/chat">back to chat</a>
                </div>
            </nav>
            
        );
    }
}