import './chat.scss';

import  React, { Component } from 'react';
import { Sidebar } from '../sidebar/sidebar';
import { Toolbar } from '../toolbar/toolbar';
import { Messages } from '../message/messages';
import { MessageForm } from '../message-form/message-form';

export class Chat extends Component {
    constructor (props) {
        super(props);
        this.state = {
            messages: []
        }

        this.socket = io.connect('http://eleksfrontendcamp-mockapitron.rhcloud.com:8000');
    }

    componentWillMount() {
        fetch('http://eleksfrontendcamp-mockapitron.rhcloud.com/messages')
        .then((res) => res.json())
        .then(data => {
            this.setState({
                messages: data  
            });
            console.log(data);
    });
    }

    componentDidMount() {
        this.socket.on('connect', () => {
          console.log('connected');
          this.socket.emit('authenticate', { token: JSON.parse(localStorage.getItem('data')).token })
        })
        
        this.socket.on('message', msg => this.handleNewMessage(msg));
    }

    handleNewMessage(msg) {
        this.setState({
                messages: [...this.state.messages, msg]  
        });
    }

    sendMessage() {
        this.socket.emit('message', 'chat testing, second try');
    }

    showState() {
        console.log(this.state);
    }
    
    render() {
        return (
            <div className='chat'>
                <Sidebar/>
                <section className="main-frame">
                    <Toolbar/>
                    <Messages messages={this.state.messages}/>
                    <MessageForm/>
                    {/*<button onClick={this.sendMessage.bind(this)}>send</button>
                    <button onClick={this.showState.bind(this)}>show</button>*/}
                </section>
            </div>
        );
    }
} 