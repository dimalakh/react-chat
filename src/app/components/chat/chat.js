import './chat.scss';

import  React, { Component } from 'react';
import { connect } from 'react-redux';

import { Sidebar } from '../sidebar/sidebar';
import { Toolbar } from '../toolbar/toolbar';
import { Messages } from '../message/messages';
import { MessageForm } from '../message-form/message-form';
import { sendMessage, fetchMessages } from '../../actions/chat';

class Chat extends Component {
    constructor (props) {
        super(props);
        this.state = {
            messages: []
        }
        this.socket = io.connect('http://eleksfrontendcamp-mockapitron.rhcloud.com:8000');
    }

    componentWillMount() {
        this.props.onReceiveMessages();
        console.log(this.props.messages);
    }

    componentDidMount() {
        //this.props.onSendMessage('asdasd');
        //this.getMessages();
        this.socket.on('connect', () => {
          this.socket.emit('authenticate', { token: JSON.parse(localStorage.getItem('data')).token })
        })
        
        this.socket.on('message', msg => this.handleNewMessage(msg));
    }


    handleNewMessage(msg) {
        this.setState({
                messages: [...this.state.messages, msg]  
        });
    }

    sendMessage(msg) {
        this.socket.emit('message', msg);
    }
    
    render() {
        console.log(this.props.messages);
        return (
            <div className='chat'>
                <Sidebar/>
                <section className="main-frame">
                    <Toolbar/>
                    <Messages messages={this.props.messages}/>
                    <MessageForm send={this.sendMessage.bind(this)} />
                </section>
            </div>
        );
    }
} 

export default connect(
  (state) => ({
    messages: state.chat
  }),
  dispatch => ({
      onSendMessage: (message) => {
          dispatch(sendMessage(message));
      },
      onReceiveMessages: () => {
          dispatch(fetchMessages(dispatch));
      }
  })
)(Chat);