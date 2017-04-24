import './chat.scss';

import  React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import { Sidebar } from '../sidebar/sidebar';
import { Toolbar } from '../toolbar/toolbar';
import { Messages } from '../message/messages';
import { MessageForm } from '../message-form/message-form';
import { sendMessage, receiveNewMessage, fetchMessages } from '../../actions/chat';

class Chat extends Component {
    constructor (props) {
        super(props);
        this.state = {
            messages: []
        }
        this.socket = io.connect('http://eleksfrontendcamp-mockapitron.rhcloud.com:8000');
    }

    componentWillMount() {
        // fromDate == datebefore in miliseconds
        const fromDate = moment().add(-1, 'days').format('x');
        this.props.onReceiveMessages(fromDate);
    }

    componentDidMount() {
        this.socket.on('connect', () => {
          this.socket.emit('authenticate', { token: JSON.parse(localStorage.getItem('data')).token })
        });
        this.socket.on('message', msg => this.handleNewMessage(msg));
    }

    showMessagesFromDate(days) {
        const fromDate = moment().add(days, 'days').format('x');
        this.props.onReceiveMessages(fromDate);
    }

    handleNewMessage(msg) {
        this.props.onReceiveNewMessage(msg);
    }

    sendMessage(msg) {
        this.socket.emit('message', msg);
    }
    
    render() {
        if (this.props.isLoading) {
            return <p>Loading…</p>;
        }
        return (
            <div className='chat'>
                <Sidebar/>
                <section className="main-frame">
                    <Toolbar showFromDate={this.showMessagesFromDate.bind(this)}/>
                    <Messages messages={this.props.messageStore}/>
                    <MessageForm send={this.sendMessage.bind(this)} />
                </section>
            </div>
        );
    }
} 


export default connect(
  (state) => {
      return {
          messageStore: state.chat,
          isLoading: state.messagesIsLoading
      }
  },
  dispatch => ({
      onSendMessage: (message) => {
        dispatch(sendMessage(message));
      },
      onReceiveNewMessage: (msg) => {
        dispatch(receiveNewMessage(msg));
      },
      onReceiveMessages: (fromDate) => {
        dispatch(fetchMessages(fromDate));
      }
  })
)(Chat);