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
        // fromDate == datebefore in miliseconds
        this.props.onLoadStorage();
        const fromDate = moment().add(-1, 'days').format('x');
        //this.props.onReceiveMessages('591eea0a8cb1435d957163a9');
    }

    componentDidMount() {
        this.isLoggedIn();
        this.props.onReceiveConversations(this.userData.user._id);
        this.socket.on('connect', () => {
          this.socket.emit('authenticate', { token: this.userData.token });
          
        });
        this.socket.emit('join-chat', {user: this.userData.user });
        this.socket.on('message', msg => this.handleReceiveNewMessage(msg));
        this.socket.on('join-chat', (member) => {
            this.props.onJoinUser(member._id);
            
            console.log(member);
        });
        this.socket.on('disconnect-chat', (member) => {
            console.log(member);
        });
    }

    isLoggedIn() {
        if(!JSON.parse(localStorage.getItem('data'))){
            this.props.history.push('auth');
        }
    }

    showMessagesFromDate(days) {
        const fromDate = moment().add(days, 'days').format('x');
        this.props.onReceiveMessages(fromDate);
    }

    handleReceiveNewMessage(msg) {
        this.props.onReceiveNewMessage(msg);
    }

    sendMessage(msg) {
        this.socket.emit('message', {
            msg, 
            conversationId: this.props.activeConversation
        });
    }

    selectConversation(chatId) {
        this.socket.emit('join-room', chatId);
        this.props.onReceiveMessages(chatId);
        this.props.onSelectConversation(chatId);
    }

    createNewChat(usersId) {
        this.props.onCreateCoversation(usersId);
    }
    
    render() {
        
        return (
            <div className='chat'>
                <Sidebar activeConversation={this.props.activeConversation} createChat={this.createNewChat.bind(this)} selectConversation={this.selectConversation.bind(this)} conversations={this.props.conversationStore}/>
                <section className="main-frame">
                    <Toolbar history={this.props.history} showFromDate={this.showMessagesFromDate.bind(this)}/>
                    <Messages loader={this.props.isLoading} messages={this.props.messageStore}/>
                    <MessageForm send={this.sendMessage.bind(this)} />
                </section>
            </div>
        );
    }
} 