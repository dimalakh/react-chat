import './chat.scss';

import  React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import { Sidebar } from '../sidebar/sidebar';
import { Toolbar } from '../toolbar/toolbar';
import { Messages } from '../message/messages';
import { MessageForm } from '../message-form/message-form';


export class Chat extends Component {
    constructor (props) {
        super(props);
        this.socket = io.connect('http://eleksfrontendcamp-mockapitron.rhcloud.com:8000');
    }

    componentWillMount() {
        // fromDate == datebefore in miliseconds
        const fromDate = moment().add(-1, 'days').format('x');
        this.props.onReceiveMessages(fromDate);
    }

    componentDidMount() {
        this.isLoggedIn();
        this.socket.on('connect', () => {
          this.socket.emit('authenticate', { token: JSON.parse(localStorage.getItem('data')).token })
        });
        this.socket.on('message', msg => this.handleReceiveNewMessage(msg));
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
        this.socket.emit('message', msg);
    }
    
    render() {
        return (
            <div className='chat'>
                <Sidebar/>
                <section className="main-frame">
                    <Toolbar history={this.props.history} showFromDate={this.showMessagesFromDate.bind(this)}/>
                    <Messages loader={this.props.isLoading} messages={this.props.messageStore}/>
                    <MessageForm send={this.sendMessage.bind(this)} />
                </section>
            </div>
        );
    }
} 