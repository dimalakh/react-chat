import './chat.scss';

import  React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import { API_CONFIG } from '../../api-config.js'
import { Sidebar } from '../sidebar/sidebar';
import { Toolbar } from '../toolbar/toolbar';
import { Messages } from '../message/messages';
import { MessageForm } from '../message-form/message-form';


export class Chat extends Component {
    constructor (props) {
        super(props);
        this.socket = io.connect(`${API_CONFIG.BASE}`);
        this.userData = JSON.parse(localStorage.getItem('data'));
    }

    componentWillMount() {
        this.isLoggedIn();
        // fromDate == datebefore in miliseconds
        this.props.onLoadStorage();
        const fromDate = moment().add(-1, 'days').format('x');
        //this.props.onReceiveMessages('591eea0a8cb1435d957163a9');
    }

    componentDidMount() {
        this.isLoggedIn();
        this.socket.on('connect', () => {
          this.socket.emit('authenticate', { token: this.userData.token });
        });
        this.socket.emit('join-chat', {user: this.userData.user });
        this.socket.on('message', msg => this.handleReceiveNewMessage(msg));
        this.socket.on('join-chat', (member) => {
            this.props.onJoinUser(member._id);
        });
        this.socket.on('disconnect-chat', (member) => {
            this.props.onLeaveUser(member._id);
        });
    }

    componentRecieveProps() {
        this.isLoggedIn();
    }

    isLoggedIn() {
        if (this.isEmpty(this.props.userData)) {
            this.props.history.push('auth');
        }
    }

    showMessagesFromDate(days) {
        const fromDate = moment().add(days, 'days').format('x');
        this.props.onReceiveMessages(fromDate);
    }

    handleReceiveNewMessage(msg) {
        this.props.onConversationUpdate(msg);
        this.props.onReceiveNewMessage(msg);
    }

    sendMessage(msg) {
        this.socket.emit('message', {
            msg, 
            conversationId: this.props.activeConversation,
            sender: this.props.userData.user
        });
    }

    selectConversation(chatId) {
        this.socket.emit('join-room', chatId);
        this.props.onReceiveMessages(chatId);
        this.props.onSelectConversation(chatId);
    }

    createNewChat(userId, usersId) {
        this.props.onCreateCoversation(userId, usersId);
    }

    isEmpty(obj) {
        for (var key in obj) {
            return false;
        }
        return true;
    }
    
    render() {
        console.log(this.props.activeConversation);

        return (
            <div className='chat'>
                <Sidebar 
                activeConversation={this.props.activeConversation}
                createChat={this.createNewChat.bind(this)}
                selectConversation={this.selectConversation.bind(this)}
                conversations={this.props.conversationStore}
                conversationsIsLoading={this.props.conversationsIsLoading}
                getUsers={this.props.onReceiveUsers.bind(this)}
                fetchedUsers={this.props.fetchedUsers}
                userData={this.userData}
                getConversations={this.props.onReceiveConversations.bind(this)}
                />
                <section className="main-frame">
                    <Toolbar 
                    userData={this.props.userData}
                     history={this.props.history}
                     showFromDate={this.showMessagesFromDate.bind(this)}
                     uploadUserImg={this.props.onUserImageLoad.bind(this)}
                    />
                    {this.props.activeConversation !== ''?
                   <div className="chat-content-wrapper">
                    <Messages 
                     loader={this.props.isLoading}
                     messages={this.props.messageStore}
                    />
                    <MessageForm 
                     send={this.sendMessage.bind(this)} 
                     userData={this.userData}
                     /></div> :
                        <div className="default-chat-screen">select chat</div>
                    }
                </section>
            </div>
        );
    }
} 